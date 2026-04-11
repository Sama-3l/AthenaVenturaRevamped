import PageHeader from '@/app/_components/page_header'
import React from 'react'
import PackageCard from './_components/PackageCard/PackageCard'

export default function WhatWeOffer() {
  return (
    <div className='pb-24'>
        <PageHeader title="What we offer" className = "text-(--color-foreground) border-(--color-foreground) pt-12"/>
        <div className='py-8 md:py-16 sm:px-6 px-4'>
          <p className='font-(family-name:--font-fustat) tracking-[-0.5%]'>Every engagement starts with a scoping call. Prices are starting points.</p>
          <div className='lg:items-start columns-1 sm:columns-2 gap-4 pt-6 lg:grid lg:grid-cols-4 lg:gap-4'>
            <PackageCard title="Pixel" deadline={'1-2 weeks'} description={'Curating first impressions.'} core={{
            "UI": [
              "Wireframes",
              "High-Fidelity Screens",
              "Responsive Design",
              "Component Library"
            ],
            "HANDOFF": [
              "Figma File",
              "Asset Exports"
            ]
          }} expansion={[
            "Brand Identity",
            "Prototype",
            "Advanced Motion Design",
            "Design Audit"
          ]} amount={'$599'} />
            <PackageCard title="Signal" deadline={'1-3 weeks'} description={'Get me some internet money.'} core={{
            "Core": [
              "Everything in Pixel core",
              "Sales funnels, business portfolio, etc.",
              "No-Code Framer, Webflow Development",
              "Up to 5-6 pages",
              "High-converting landing page",
              "Copywriting",
              "Mobile-first and optimized design",
              "Basic SEO",
              "30-day post launch support window",
            ]
          }} expansion={[
            "Shopify E-commerce",
            "Next.js custom web apps",
            "CMS / blog",
            "Advanced SEO",
            "Extra pages"
          ]} amount={'$899'} />
            <PackageCard title="Foundation" deadline={'8-12 weeks'} description={'An app to rule them all.'} core={{
            "Core": [
              "Everything in Pixel core",
              "System design",
              "Cross-Platform Flutter application",
              "Push notifications",
              "Template admin panel",
              "QA Testing",
              "Payments Integration",
              "60-days post-launch support window",
              "Deployment plans",
              "App release strategies"
            ]
          }} expansion={[
            "Advanced Maps SDK implementation",
            "Encrypted messaging",
            "Third-party APIs",
            "CI/CD Pipelines",
            "Custom Next.js admin panel"
          ]} amount={'$3,000'} main={true} />
            <PackageCard title="Monolith" deadline={'14-20 weeks'} description={'Make me one with everything.'} core={{
            "Core": [
              "Everything in Foundation",
              "Everything in Signal",
              "Shared Design Systems",
              "SEO & analytics",
              "Full QA suite",
              "60-days post-launch support"
            ]
          }} expansion={[
            "Complete ecom solution",
            "Org. admin panel",
            "Data dashboards"
          ]} amount={'$5,000'} />
          </div>
        </div>
    </div>
  )
}
