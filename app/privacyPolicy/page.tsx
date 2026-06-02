'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PageHeader from '@/app/_components/page_header'

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>('approach')

  // Table of Contents navigation items
  const tocItems = [
    { id: 'approach', label: 'Services & Approach' },
    { id: 'contact', label: '1. Contact Information' },
    { id: 'collect', label: '2. Information We Collect' },
    { id: 'use', label: '3. How We Use Info' },
    { id: 'gdpr', label: '4. Legal Basis (GDPR)' },
    { id: 'sharing', label: '5. Information Sharing' },
    // { id: 'stripe', label: '7. Payment & Stripe' },
    { id: 'security', label: '6. Data Security' },
    { id: 'retention', label: '7. Data Retention' },
    { id: 'transfers', label: '8. International Transfers' },
    { id: 'rights', label: '9. Your Rights' },
    { id: 'marketing', label: '10. Consent Options' },
    // { id: 'cookies', label: '13. Cookies & Tracking' },
    { id: 'children', label: '11. Children\'s Privacy' },
    { id: 'updates', label: '12. Updates to Policy' },
    { id: 'supervisory', label: '13. Supervisory Authority' },
  ]

  // Track scroll position to update active TOC section
  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tocItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Run once on mount
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <div className="w-full bg-(--background) text-(--foreground) min-h-screen font-(family-name:--font-fustat)">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">

        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-(--foreground)/60 hover:text-(--foreground) group transition-colors mb-12"
        >
          <svg
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Page Header */}
        <PageHeader
          /* CUSTOMIZE: Change your application/website title here if needed */
          title="Athena Ventura Privacy Policy"
          /* CUSTOMIZE: Update the last updated date here */
          subtitle="Last Updated: June 2, 2026"
          noHorizontalPadding
          className="text-(--foreground) border-(--foreground)/10 mb-16 pt-0"
        />

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Sidebar Table of Contents (Desktop) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 self-start border-l border-(--foreground)/10 pl-6 py-2 flex flex-col gap-3">
              <p className="text-xs uppercase tracking-wider text-(--foreground)/40 font-semibold mb-2">
                On this page
              </p>
              {tocItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToAnchor(item.id)}
                    className={`flex items-center gap-3 text-left text-sm transition-all duration-300 ${isActive
                      ? 'text-(--primary-color) font-medium translate-x-1'
                      : 'text-(--foreground)/50 hover:text-(--foreground) hover:translate-x-0.5'
                      }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-(--primary-color) transition-all duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}
                    />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </aside>

          {/* Privacy Policy Content */}
          <article className="lg:col-span-3 space-y-16 max-w-3xl leading-relaxed">

            {/* Intro / Preface */}
            <div className="prose prose-invert">
              <p className="text-lg text-(--foreground)/80 leading-relaxed font-(family-name:--font-ibarra-regular) italic">
                {/* CUSTOMIZE: Edit the opening paragraph company and brand legal details below */}
                <strong>Athena Ventura</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website (collectively, the &quot;Services&quot;).
              </p>
            </div>

            {/* Section: Services & Approach */}
            <section id="approach" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                Our Services and Privacy Approach
              </h2>
              <div className="border border-(--foreground)/5 bg-(--foreground)/[0.02] rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-(--primary-color) mb-1">
                    {/* CUSTOMIZE: Edit service/website name */}
                    Athena Ventura Website
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-sm text-(--foreground)/70">
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-(--foreground)/40 font-semibold mb-1">What</span>
                      Our website and marketing communication.
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-(--foreground)/40 font-semibold mb-1">Data Collection</span>
                      Standard web analytics, marketing communications.
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-(--foreground)/40 font-semibold mb-1">Privacy Model</span>
                      Industry-standard data practices with transparency and user control.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: 1. Contact Information */}
            <section id="contact" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                1. Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-(--foreground)/5 bg-(--foreground)/[0.02] rounded-xl p-6 text-sm text-(--foreground)/80">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-(--foreground)/40 font-semibold mb-1">Data Controller</span>
                  {/* CUSTOMIZE: Edit the primary Data Controller company name */}
                  Athena Ventura
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-(--foreground)/40 font-semibold mb-1">Address</span>
                  {/* CUSTOMIZE: Edit corporate address details */}
                  Vishwas Khand, Gomti Nagar, Lucknow, India
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-(--foreground)/40 font-semibold mb-1">Email</span>
                  {/* CUSTOMIZE: Edit support/help email */}
                  <a href="mailto:contact@athenaventura.com" className="text-(--primary-color) hover:underline">
                    contact@athenaventura.com
                  </a>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-(--foreground)/40 font-semibold mb-1">Phone</span>
                  {/* CUSTOMIZE: Edit primary phone number */}
                  <a href="tel:+13022654350" className="text-(--primary-color) hover:underline">
                    -
                  </a>
                </div>
              </div>
            </section>

            {/* Section: 2. Information We Collect */}
            <section id="collect" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                2. Information We Collect
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-(--foreground)/90 mb-2">2.1 Website</h3>

                  <div className="space-y-4 pl-4 border-l border-(--foreground)/10">
                    <div>
                      <h4 className="font-medium text-sm uppercase tracking-wider text-(--foreground)/60 mb-2">Information You Provide Directly</h4>
                      <ul className="list-none space-y-2">
                        <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                          <span><strong>Account Information:</strong> Name, email address, company name</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                          <span><strong>Communication Data:</strong> Messages you send us, support requests, feedback</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                          <span><strong>Profile Information:</strong> Any additional information you choose to add to your profile</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-2">
                      <h4 className="font-medium text-sm uppercase tracking-wider text-(--foreground)/60 mb-2">Information We Collect Automatically</h4>
                      <ul className="list-none space-y-2">
                        <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                          <span><strong>Usage Data:</strong> How you interact with our website and platform, features used, time spent</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                          <span><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                          <div>
                            <strong>Analytics Data:</strong> We use third-party analytics tools to collect information including:
                            <ul className="list-disc list-inside pl-4 mt-1 space-y-1 text-xs text-(--foreground)/60">
                              <li>Page views and clicks</li>
                              <li>User journey and behavior patterns</li>
                              <li>Performance metrics</li>
                              <li>Session recordings (when enabled)</li>
                            </ul>
                          </div>
                        </li>
                        {/* Uncomment when adding analytics */}
                        {/* <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                          <span><strong>Cookies and Tracking:</strong> We use cookies and similar technologies for analytics and functionality</span>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold text-lg text-(--foreground)/90 mb-2">2.2 Third-Party Information (Website Only)</h3>
                  <ul className="list-none space-y-2 pl-4 border-l border-(--foreground)/10">
                    <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Integration Data:</strong> If you connect third-party services to our platform</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Social Login:</strong> Information from social media platforms if you use social login</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section: 4. How We Use Your Information */}
            <section id="use" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                3. How We Use Your Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-(--foreground)/90 mb-1">3.1 Website Usage</h3>
                  <p className="text-sm text-(--foreground)/50 italic mb-3">This section applies to our website and online services.</p>

                  <div className="space-y-4 pl-4 border-l border-(--foreground)/10">
                    <div>
                      <h4 className="font-medium text-sm uppercase tracking-wider text-(--foreground)/60 mb-2">Service Provision</h4>
                      <ul className="list-none space-y-2">
                        {['Creating and managing your account', 'Providing access to our SaaS platform', 'Managing subscriptions and receiving payment confirmations from Stripe', 'Providing customer support', 'Sending transactional emails (account updates, receipts, security alerts)'].map((text, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-(--foreground)/75">
                            <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <h4 className="font-medium text-sm uppercase tracking-wider text-(--foreground)/60 mb-2">Analytics and Improvement</h4>
                      <ul className="list-none space-y-2">
                        {['Product Analytics: We use third-party analytics tools to analyze user behavior and improve our Services', 'Understanding how our website and platform are used', 'Identifying and fixing technical issues', 'Developing new features and improvements'].map((text, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-(--foreground)/75">
                            <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Uncomment when adding newsletter */}
                    {/* <div className="pt-2">
                      <h4 className="font-medium text-sm uppercase tracking-wider text-(--foreground)/60 mb-2">Marketing Communications (with consent)</h4>
                      <ul className="list-none space-y-2">
                        {['Email Marketing: We use third-party email marketing platforms to send marketing emails', 'Product updates and announcements', 'Educational content and tips', 'Promotional offers and newsletters'].map((text, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-(--foreground)/75">
                            <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                            <span>{text}</span>
                          </li>
                        ))}
                        <li className="flex items-start gap-3 text-xs text-(--foreground)/50 italic pl-5">
                          Note: You can unsubscribe from marketing emails at any time.
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold text-lg text-(--foreground)/90 mb-2">3.2 Legal and Security</h3>
                  <ul className="list-none space-y-2 pl-4 border-l border-(--foreground)/10">
                    {['Complying with legal obligations', 'Protecting against fraud and security threats', 'Enforcing our Terms of Service'].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-(--foreground)/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section: 5. Legal Basis for Processing (GDPR) */}
            <section id="gdpr" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                4. Legal Basis for Processing (GDPR)
              </h2>
              <p className="text-sm text-(--foreground)/70">
                For EU residents, our legal basis for processing includes:
              </p>
              <ul className="list-none space-y-3 pl-4 border-l border-(--foreground)/10">
                <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                  <span><strong>Contract:</strong> Processing necessary to provide our Services (including Athena Ventura licensing)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                  <span><strong>Consent:</strong> For marketing communications and certain analytics</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                  <span>{/* CUSTOMIZE: Edit branding keywords */}<strong>Legitimate Interest:</strong> For improving our Services, security, business operations, and Athena Ventura performance</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                  <span><strong>Legal Obligation:</strong> For compliance with laws and regulations</span>
                </li>
              </ul>
            </section>

            {/* Section: 6. Information Sharing and Third Parties */}
            <section id="sharing" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                5. Information Sharing and Third Parties
              </h2>
              <p className="text-sm text-(--foreground)/70">
                We share your information with:
              </p>

              <div className="space-y-6 pl-4 border-l border-(--foreground)/10">
                <div>
                  <h3 className="font-semibold text-base text-(--foreground)/90 mb-2">5.1 Service Providers</h3>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Analytics and Product Intelligence Providers:</strong> For understanding user behavior, product insights, and service improvements</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Email Marketing and Communication Platforms:</strong> For sending marketing emails and customer communications (GDPR compliant)</span>
                    </li>
                    {/* <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Stripe:</strong> For payment processing — Stripe directly handles all billing information, credit card details, and payment processing through their secure portal. We do not have access to your full payment details. Stripe&apos;s privacy policy governs their handling of your payment information: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-(--primary-color) hover:underline font-medium">stripe.com/privacy</a></span>
                    </li> */}
                    <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Cloud Hosting Providers:</strong> For data storage, processing, and application hosting</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Customer Support Tools:</strong> For help desk, support ticket management, and customer service</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-base text-(--foreground)/90 mb-2">5.2 Legal Requirements</h3>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>When required by law, court order, or government regulation</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>To protect our rights, property, or safety</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>In connection with business transfers or acquisitions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-base text-(--foreground)/90 mb-2">5.3 With Your Consent</h3>
                  <ul className="list-none space-y-1">
                    <li className="flex items-start gap-3 text-sm text-(--foreground)/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>Any other sharing will be done only with your explicit consent</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section: 7. Payment Processing and Stripe */}
            {/* <section id="stripe" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                7. Payment Processing and Stripe
              </h2>
              <div className="border-l-4 border-(--primary-color) bg-(--foreground)/[0.02] p-6 space-y-4 rounded-r-xl">
                <p className="font-bold text-sm uppercase tracking-wider text-(--primary-color)">
                  Important Notice
                </p>
                <p className="text-sm text-(--foreground)/85">
                  We do not directly collect, store, or process your payment information.
                </p>
                <ul className="list-none space-y-3 pt-2 text-sm text-(--foreground)/75">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                    <span><strong>Stripe Integration:</strong> All payment processing is handled directly by Stripe, Inc. through their secure payment portal.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                    <span><strong>What We Receive:</strong> We only receive transaction confirmations, subscription status updates, and customer IDs from Stripe.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                    <span><strong>What We Don&apos;t Receive:</strong> Credit card numbers, CVV codes, billing addresses, or other sensitive payment details.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                    <span><strong>Stripe&apos;s Responsibility:</strong> Stripe is responsible for securely handling all payment data according to PCI DSS standards.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                    <span><strong>Stripe&apos;s Privacy Policy:</strong> Your payment information is governed by Stripe&apos;s Privacy Policy: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-(--primary-color) hover:underline font-medium">stripe.com/privacy</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                    <span><strong>Data Security:</strong> Stripe maintains the highest levels of security certification and compliance.</span>
                  </li>
                </ul>
              </div>
            </section> */}

            {/* Section: 8. Data Security */}
            <section id="security" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                6. Data Security
              </h2>
              <p className="text-sm text-(--foreground)/75">
                We implement appropriate technical and organizational measures to protect your data:
              </p>
              <ul className="list-none space-y-3 pl-4 border-l border-(--foreground)/10 text-sm text-(--foreground)/75">
                {['Encryption in transit and at rest', 'Regular security assessments and updates', 'Access controls and authentication', 'Employee training on data protection', 'Incident response procedures'].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-(--foreground)/60 italic pl-4">
                <strong>Third-Party Security:</strong> Our service providers maintain enterprise-grade security certifications and offer enhanced compliance options where required.
              </p>
            </section>

            {/* Section: 9. Data Retention */}
            <section id="retention" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                7. Data Retention
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-(--foreground)/90 mb-2">7.1 Website Data</h3>
                  <ul className="list-none space-y-3 pl-4 border-l border-(--foreground)/10 text-sm text-(--foreground)/75">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Account Data:</strong> Retained while your account is active and for legitimate business purposes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Analytics Data:</strong> Typically retained for 2 years for product improvement.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Marketing Data:</strong> Until you unsubscribe or withdraw consent.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Legal Requirements:</strong> Some data may be retained longer for legal compliance.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Payment Data:</strong> Handled entirely by Stripe — refer to their retention policies.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold text-lg text-(--foreground)/90 mb-2">7.2 Your Deletion Rights</h3>
                  <ul className="list-none space-y-2 pl-4 border-l border-(--foreground)/10 text-sm text-(--foreground)/75">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Website Data:</strong> You can request deletion of your website and account data (subject to legal requirements).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section: 8. International Data Transfers */}
            <section id="transfers" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                8. International Data Transfers
              </h2>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-(--foreground)/90 mb-2">8.1 Website</h3>
                <p className="text-sm text-(--foreground)/75">
                  {/* CUSTOMIZE: Edit server locations */}
                  Our servers are located in <strong>India</strong>.
                </p>
                <ul className="list-none space-y-3 pl-4 border-l border-(--foreground)/10 text-sm text-(--foreground)/75">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                    <span><strong>Analytics Providers:</strong> We rely on our analytics partners to handle data hosting for appropriate regional requirements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                    <span><strong>Email Marketing Providers:</strong> We rely on our email third party service providers to handle data hosting for appropriate regional requirements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                    <span><strong>Stripe:</strong> Processes payments globally with appropriate data protection safeguards.</span>
                  </li>
                </ul>
                <p className="text-sm text-(--foreground)/70 italic pl-4">
                  We ensure adequate protection through Standard Contractual Clauses where applicable.
                </p>
              </div>
            </section>

            {/* Section: 9. Your Rights */}
            <section id="rights" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                9. Your Rights
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-(--foreground)/90 mb-2">9.1 Rights for All Users</h3>
                  <ul className="list-none space-y-3 pl-4 border-l border-(--foreground)/10 text-sm text-(--foreground)/75">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Access:</strong> Request a copy of your personal data.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Correction:</strong> Update or correct inaccurate information.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Deletion:</strong> Request deletion of your personal data.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Payment Data:</strong> For payment-related data requests, contact Stripe directly.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold text-lg text-(--foreground)/90 mb-2">9.2 Website Specific Rights</h3>
                  <ul className="list-none space-y-3 pl-4 border-l border-(--foreground)/10 text-sm text-(--foreground)/75">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Opt-out:</strong> Unsubscribe from marketing communications.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Analytics Control:</strong> You may block cookies and trackers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Account Management:</strong> Update profile information and preferences.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold text-lg text-(--foreground)/90 mb-2">9.3 EU Residents (GDPR Rights)</h3>
                  <ul className="list-none space-y-3 pl-4 border-l border-(--foreground)/10 text-sm text-(--foreground)/75">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Portability:</strong> Receive your data in a machine-readable format.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Restriction:</strong> Limit how we process your data.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Objection:</strong> Object to processing based on legitimate interest.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span><strong>Withdraw Consent:</strong> Withdraw consent for processing.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold text-lg text-(--foreground)/90 mb-2">9.4 California Residents (CCPA Rights)</h3>
                  <ul className="list-none space-y-3 pl-4 border-l border-(--foreground)/10 text-sm text-(--foreground)/75">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>Right to know what personal information is collected.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>Right to delete personal information.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>Right to opt-out of sale (we do not sell personal data).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>Right to non-discrimination.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section: 10. Marketing Communications and Consent */}
            <section id="marketing" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                10. Marketing Communications and Consent
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-(--foreground)/90 mb-2">10.1 Email Marketing Consent</h3>
                  <ul className="list-none space-y-2 pl-4 border-l border-(--foreground)/10 text-sm text-(--foreground)/75">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>We use third-party email marketing platforms for marketing emails.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>Marketing emails require explicit opt-in consent.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>You can unsubscribe at any time using the link in emails.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>Transactional emails are necessary for service provision.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <h3 className="font-semibold text-lg text-(--foreground)/90 mb-2">10.2 Analytics Consent</h3>
                  <ul className="list-none space-y-2 pl-4 border-l border-(--foreground)/10 text-sm text-(--foreground)/75">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>Website Analytics: We seek consent for non-essential analytics tracking.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>Cookie Consent: Required for tracking cookies on our website.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                      <span>Opt-out Options: Available for website analytics tracking.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section: 11. Cookies and Tracking */}
            {/* <section id="cookies" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                13. Cookies and Tracking
              </h2>
              <p className="text-sm text-(--foreground)/75 pl-4 border-l border-(--foreground)/10">
                We use cookies and similar technologies on our website.
              </p>
            </section> */}

            {/* Section: 11. Children's Privacy */}
            <section id="children" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                11. Children&apos;s Privacy
              </h2>
              <p className="text-sm text-(--foreground)/75 pl-4 border-l border-(--foreground)/10">
                Our Services are not intended for children under 13 (or 16 in the EU). We do not knowingly collect personal data from children.
              </p>
            </section>

            {/* Section: 12. Updates to This Policy */}
            <section id="updates" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                12. Updates to This Policy
              </h2>
              <p className="text-sm text-(--foreground)/75">
                We may update this Privacy Policy periodically. We will:
              </p>
              <ul className="list-none space-y-3 pl-4 border-l border-(--foreground)/10 text-sm text-(--foreground)/75">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                  <span>Post updates on our website.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                  <span>Send notification emails for material changes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--primary-color) shrink-0 mt-2" />
                  <span>Update the &quot;Last Updated&quot; date.</span>
                </li>
              </ul>
            </section>

            {/* Section: 13. Supervisory Authority */}
            <section id="supervisory" className="scroll-mt-24 space-y-6">
              <h2 className="font-(family-name:--font-ibarra-italic) text-3xl text-(--foreground) border-b border-(--foreground)/5 pb-3">
                13. Supervisory Authority
              </h2>
              <p className="text-sm text-(--foreground)/75 pl-4 border-l border-(--foreground)/10">
                EU residents have the right to lodge a complaint with your local data protection authority if you believe we have violated your privacy rights.
              </p>
            </section>

          </article>
        </div>
      </div>
    </div>
  )
}