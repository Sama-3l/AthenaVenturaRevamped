import React from 'react'
import ServiceCard from './_components/ServiceCard'
import PageHeader from '@/app/_components/page_header'

export default function WhatWeDo() {
  return (
    <div className="flex flex-col">
        <div className='bg-(--color-foreground)'>

            <PageHeader title="What we do" subtitle='We have a lot to offer so choose what you’ll like us to do and combinations are obviously very welcome.  '/>
            <div className='flex flex-row'>
                <ServiceCard id={1} title={'Brand\nDesign'} subtitle={'Untangling complex product flows complex product flows complex product flows complex product flows complex product flows complex product flows'} bullets={[
                    "Untangling complex product flows",
                    "Shipping MVPs that are ready on day one",
                    "Fixing what's hurting adoption",
                    "Building systems that scale"
                ]} />
                <ServiceCard id={2} title={'User Interface &\nUser Experience'} subtitle={'Untangling complex product flows complex product flows complex product flows complex product flows complex product flows complex product flows '} bullets={[
                    "Untangling complex product flows",
                    "Shipping MVPs that are ready on day one",
                    "Fixing what's hurting adoption",
                    "Building systems that scale"
                ]}/>
                <ServiceCard id={3} title={'Web\nDevelopment'} subtitle={'Untangling complex product flows complex product flows complex product flows complex product flows complex product flows complex product flows '} bullets={[
                    "Untangling complex product flows",
                    "Shipping MVPs that are ready on day one",
                    "Fixing what's hurting adoption",
                    "Building systems that scale"
                ]}/>
            </div>
            <div className='flex flex-row'>
                <ServiceCard id={4} title={'Brand\nDesign'} subtitle={'Untangling complex product flows complex product flows complex product flows complex product flows complex product flows complex product flows'} bullets={[
                    "Untangling complex product flows",
                    "Shipping MVPs that are ready on day one",
                    "Fixing what's hurting adoption",
                    "Building systems that scale"
                ]} />
                <ServiceCard id={5} title={'User Interface &\nUser Experience'} subtitle={'Untangling complex product flows complex product flows complex product flows complex product flows complex product flows complex product flows '} bullets={[
                    "Untangling complex product flows",
                    "Shipping MVPs that are ready on day one",
                    "Fixing what's hurting adoption",
                    "Building systems that scale"
                ]}/>
                <ServiceCard id={6} title={'Web\nDevelopment'} subtitle={'Untangling complex product flows complex product flows complex product flows complex product flows complex product flows complex product flows '} bullets={[
                    "Untangling complex product flows",
                    "Shipping MVPs that are ready on day one",
                    "Fixing what's hurting adoption",
                    "Building systems that scale"
                ]}/>
            </div>
        </div>
    
    </div>
  )
}
