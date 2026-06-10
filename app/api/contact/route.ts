import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { rateLimit } from '../../lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple HTML escaping function to prevent HTML/XSS injection
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// RFC 5322 compliant-ish basic email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON payload' },
      { status: 400 }
    );
  }

  const { name, email, message } = body;

  // 1. Basic Presence Validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'All fields are required (name, email, message).' },
      { status: 400 }
    );
  }

  // 2. Email Format Validation
  if (!EMAIL_REGEX.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  // 3. Length Constraints (prevents buffer/abuse issues)
  if (name.length > 100) {
    return NextResponse.json(
      { error: 'Name must be 100 characters or less.' },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: 'Message must be 5000 characters or less.' },
      { status: 400 }
    );
  }

  // Escape user inputs to prevent injection attacks when rendering in HTML
  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>');

  try {
    // A: Confirmation email to the visitor (using strictly static text to avoid custom spam relay)
    await resend.emails.send({
      from: 'Athena Ventura <contact@athenaventura.com>',
      to: [email],
      replyTo: 'contact@athenaventura.com',
      subject: `Thank you for contacting us.`,
      html: `
        <p>See you soon, partner.</p>
        <br>
        <p>Glad to receive your message. Expect a response soon, no matter what your message is.</p>
      `,
    });

    // B: Notification email to the admin team (safely escaped)
    await resend.emails.send({
      from: 'Website <contact@athenaventura.com>',
      to: ['contact@athenaventura.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}