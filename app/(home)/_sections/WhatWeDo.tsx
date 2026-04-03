import React from 'react'
import ServiceCard from './ServiceCard'

export default function WhatWeDo() {
  return (
    <div className="flex bg-(--color-foreground) flex-col border-b">
        <div className="flex items-center justify-between pl-8 pr-8 pt-8 pb-4 text-(--color-background) border-b border-(--color-background)">
            <h1 className="page-title">
            What we do
            </h1>
            <p className="w-62.5 page-subtitle">
            We have a lot to offer so choose what you’ll like us to do and combinations are obviously very welcome.  
            </p>
        </div>
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
        <div className='flex flex-row mb-16'>
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
  )
}
