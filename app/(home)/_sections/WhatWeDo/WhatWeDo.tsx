import React from 'react'
import ServiceCard from './_components/ServiceCard'
import PageHeader from '@/app/_components/page_header'

export default function WhatWeDo() {
  return (
    <div className="flex flex-col">
        <div className='bg-(--color-foreground)'>

            <PageHeader title="What we do" subtitle='We have a lot to offer so choose what you’ll like us to do and combinations are obviously very welcome.  '/>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                <ServiceCard id={1} title={'Brand\nDesign'} subtitle={'We craft identities that don’t just look good—they feel intentional, memorable, and built for digital products. Every brand we design is made to live seamlessly across interfaces and experiences.'} bullets={[
                    "Logo, typography, color systems",
                    "Digital-first visual identity",
                    "Scalable brand guidelines",
                    "Consistent cross-platform presence",
                ]} />
                <ServiceCard id={2} title={'User Interface &\nUser Experience'} subtitle={'We design interfaces that are intuitive, refined, and grounded in real user behavior. Every interaction is shaped to feel effortless, reducing friction at every step.'} bullets={[
                    "User flows & wireframes",
                    "High-fidelity UI design",
                    "Interaction & micro-animations",
                    "Usability-focused layouts",                                        
                ]}/>
                <ServiceCard id={3} title={'Web\nDevelopment'} subtitle={'We build fast, scalable, and visually precise websites using modern tools and frameworks. From no-code to full-stack, every build is optimized for performance and longevity.'} bullets={[
                    "Framer & Webflow builds",
                    "Custom Next.js apps",
                    "Responsive, fast performance",
                    "Clean, scalable code",
                ]}/>
                <ServiceCard id={4} title={'App\nDevelopment'} subtitle={'We develop high-quality mobile applications designed for performance and seamless user experience. Every app is engineered to feel native, responsive, and reliable at scale.'} bullets={[
                    "Flutter cross-platform apps",
                    "Smooth UI implementation",
                    "API & backend integration",
                    "Scalable app architecture",
                ]} />
                <ServiceCard id={5} title={'Social\nAutomations'} subtitle={'We design intelligent workflows that eliminate repetitive tasks and streamline operations. Automation is approached as a system—built to save time and reduce human error.'} bullets={[
                    "Custom automation workflows",
                    "Social & engagement systems",
                    "Tool integrations",
                    "Process optimization",                    
                ]}/>
                <ServiceCard id={6} title={'Retainer\nContracts'} subtitle={'We partner long-term with products we’ve built—refining, scaling, and supporting them as they evolve. Think of us as an extended team, available when you need us.'} bullets={[
                    "Ongoing maintenance",
                    "Feature development",
                    "Dedicated support",
                    "On-demand team extension",
                ]}/>
            </div>
        </div>
    
    </div>
  )
}
