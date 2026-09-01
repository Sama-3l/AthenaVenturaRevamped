import React from 'react'
import ServiceCard from './_components/ServiceCard'
import PageHeader from '@/app/_components/page_header'

export default function WhatWeDo() {
  return (
    <div className="flex flex-col">
        <div className='bg-(--color-foreground)'>
            <div className='sm:border-r-2 border-(--color-background)'>
                <PageHeader title="What we do" subtitle='We have a lot to offer so choose what you’ll like us to do and combinations are obviously very welcome.  '/>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                <ServiceCard id={1} title={'Web\nDevelopment'} subtitle={'We build fast, scalable, and visually precise websites using modern tools and frameworks. From custom code to no-code platforms, every build is optimized for performance, ownership, and longevity.'} bullets={[
                    "Custom Next.js development",
                    "Framer & Webflow builds",
                    "Shopify custom & template stores",
                    "Responsive, high-performance code",
                ]} />
                <ServiceCard id={2} title={'App\nDevelopment'} subtitle={'We develop high-quality mobile applications designed for performance and seamless user experience. Every app is engineered to feel native, responsive, and reliable at scale.'} bullets={[
                    "Flutter cross-platform apps",
                    "Smooth UI implementation",
                    "API & backend integration",
                    "Scalable app architecture",
                ]}/>
                <ServiceCard id={3} title={'User Interface &\nUser Experience'} subtitle={'We design interfaces that are intuitive, refined, and grounded in real user behavior. Every interaction is shaped to feel effortless, reducing friction at every step.'} bullets={[
                    "User flows & wireframes",
                    "High-fidelity UI design",
                    "Interaction & micro-animations",
                    "Usability-focused layouts",
                ]}/>
                <ServiceCard id={4} title={'Shopify &\nStore Management'} subtitle={'We design and manage Shopify stores built to convert, whether starting from a template or built fully custom. Every store is paired with the creative assets it needs to look intentional at every touchpoint.'} bullets={[
                    "Custom & template Shopify builds",
                    "Ongoing store management",
                    "Announcement banners & promo assets",
                    "Product photography & imagery",
                ]}/>
                <ServiceCard id={5} title={'Software\nStrategy & Partnership'} subtitle={'We plan your software around your revenue and investment cycle, not just a feature list. As your software partner—not just your development agency—we stay invested in outcomes, not handoffs.'} bullets={[
                    "Revenue-aligned product roadmaps",
                    "Investment-cycle planning",
                    "Design & build quality control",
                    "Long-term technical ownership",
                ]}/>
                <ServiceCard id={6} title={'Marketing,\nContent & Ads'} subtitle={'We support your growth beyond the build with social media, content, and ad management. It\u2019s a newer part of what we offer, built to complement the software we create for you.'} bullets={[
                    "Social media management",
                    "Ad campaign management",
                    "Content creation & strategy",
                    "Ongoing brand presence",
                ]}/>
            </div>
        </div>
    
    </div>
  )
}
