"use client"
import React from 'react'
import styles from '../styles/service_card.module.css';

export default function ServiceCard({id, title, subtitle, bullets} : {id : number, title: string, subtitle : string, bullets: string[]}) {
    const isLastInRow = id % 3 === 0;
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id)
        if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <div className='group w-full h-[80vh] flex flex-col justify-between relative overflow-hidden'>
            
            {/* Gradient overlay - slides up from bottom */}
            <div 
                className='absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-350 pointer-events-none'
                style={{ background: 'linear-gradient(to top, #E33E3C 0%, #1C1C1C 100%)' }}
            />

            <div className={`relative z-10 flex h-full flex-col px-5 border-(--color-background) border-r-2 justify-between`}>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col pt-6 gap-2'>
                        <p className={styles.service_number}> 
                            (00{id})
                        </p>
                        <h2 className={styles.service_title}>{title}</h2>
                    </div>
                    <p className={styles.service_body}>
                        {subtitle}
                    </p>
                </div>
                <div className='pb-6'>
                    <ul className='space-y-2'>
                        {bullets.map((item, index) => (
                            <li key={index} className={styles.service_body}>
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${styles.bullet_dot}`}/>
                                    {item}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='relative z-10 border-(--color-background) border-r-2 border-b-2 cursor-pointer'>
                <div className={`flex flex-row justify-between group-hover:border-(--color-foreground) border-(--color-background) border-t bg-transparent p-5 transition-colors duration-500`} onClick={() => scrollToSection("what-we-offer")}>
                    <h2 className={styles.cta}>See Pricing</h2>
                    <svg className={styles.arrow} width="24" height="29" viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.6468 12.9137C36.9468 13.2138 37.1154 13.6208 37.1154 14.0451C37.1154 14.4695 36.9468 14.8764 36.6468 15.1765L24.2017 27.6216L23.9483 27.8297C23.6404 28.0332 23.2716 28.1241 22.9044 28.0868C22.5372 28.0495 22.1942 27.8864 21.9335 27.6252C21.6728 27.3639 21.5104 27.0206 21.4739 26.6533C21.4374 26.2861 21.5289 25.9175 21.7331 25.61L21.939 25.3588L31.6529 15.6449L1.57202 15.6449C1.15255 15.6376 0.752731 15.4658 0.458667 15.1666C0.164602 14.8674 -0.000172757 14.4646 -0.000172757 14.0451C-0.000172757 13.6256 0.164604 13.2228 0.458668 12.9236C0.752732 12.6244 1.15255 12.4527 1.57202 12.4454L31.6529 12.4454L21.939 2.73141C21.6389 2.43135 21.4703 2.02439 21.4703 1.60004C21.4703 1.17569 21.6389 0.768727 21.939 0.468668C22.239 0.16861 22.646 3.92301e-05 23.0703 3.92301e-05C23.4947 3.92301e-05 23.9016 0.16861 24.2017 0.468668L36.6468 12.9137Z" fill="var(--color-foreground)"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}