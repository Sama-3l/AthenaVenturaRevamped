import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { rateLimit } from '../../lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiter: 5 requests per 60 seconds per IP
const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per interval
});

export async function POST(request: Request) {
  // Get IP address for rate limiting
  const ip = request.headers.get('x-forwarded-for') || 'anonymous';
  
  try {
    await limiter.check(5, ip); // 5 requests per minute
  } catch {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Please try again later.' },
      { status: 429 }
    );
  }

  const { name, email, message } = await request.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'All fields are required' },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Use your verified domain
      to: 'athenaventur@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}