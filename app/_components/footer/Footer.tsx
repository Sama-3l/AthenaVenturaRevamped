import React from 'react'
import styles from './styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='flex flex-col lg:gap-12 lg:pt-75 lg:px-12 gap-6 pt-25 px-4'>
            <h2 className={styles.footer_logo}>Athena Ventura</h2>
            <div className='flex flex-row justify-between'>
                <Link href="https://www.instagram.com/athenaventur/" target="_blank" rel="noopener noreferrer">
                    <Image src="/instagram.svg" alt="My Logo" width={24} height={100} className='cursor-pointer' />
                </Link>
                <Link href="https://www.linkedin.com/company/101769411/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                    <Image src="/linkedin.svg" alt="My Logo" width={24} height={100} className='cursor-pointer' />
                </Link>
                <Link href="https://x.com/AthenaVentur4" target="_blank" rel="noopener noreferrer">
                    <Image src="/twitter.svg" alt="My Logo" width={24} height={100} className='cursor-pointer' />
                </Link>
            </div>
            <div className='flex flex-row justify-between items-end pb-4'>
                <div className='flex flex-col gap-4'>
                    <p className='font-(family-name:--font-ibarra-italic) md:text-[16px] text-[10px] opacity-60 tracking-[-0.5%]'>
                        (In a good way ofc)
                    </p>
                    <p className='font-(family-name:--font-fustat) md:text-[16px] text-[10px] tracking-[-0.5%]'>
                        Once you have worked with us, you<br />wouldn't want to work with anyone else.
                    </p>
                </div>
                <p className='font-(family-name:--font-fustat) md:text-[16px] text-[10px] tracking-[-0.5%] hidden sm:block'>
                    contact@athenaventura.com
                </p>
                <div className='flex flex-col gap-2 items-end'>
                    <Link href="/privacyPolicy" className='font-(family-name:--font-fustat) md:text-[16px] text-[10px] tracking-[-0.5%] cursor-pointer' >
                        Privacy Policy
                    </Link>
                    <p className='font-(family-name:--font-fustat) md:text-[16px] text-[10px] tracking-[-0.5%] hidden sm:block'>
                        © 2026 Athena Ventura
                    </p>
                </div>
                <div className='flex flex-col gap-2 sm:hidden items-end'>
                    <Link href="/privacyPolicy" className='font-(family-name:--font-fustat) md:text-[16px] text-[10px] tracking-[-0.5%]'>
                        Privacy Policy
                    </Link>
                    <p className='font-(family-name:--font-fustat) md:text-[16px] text-[10px] tracking-[-0.5%]'>
                        contact@athenaventura.com
                    </p>
                    <p className='font-(family-name:--font-fustat) md:text-[16px] text-[10px] tracking-[-0.5%]'>
                        © 2026 Athena Ventura
                    </p>
                </div>
            </div>
        </div>
    )
}
