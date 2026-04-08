import React from 'react'
import styles from './styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex flex-col gap-12 pt-75 px-12'>
        <h2 className={styles.footer_logo}>Athena Ventura</h2>
        <div className='flex flex-row justify-between'>
            <Link href="https://www.instagram.com/athenaventur/" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.svg" alt="My Logo" width={24} height={100} className='cursor-pointer' />
            </Link>
            <Link href="https://www.linkedin.com/company/101769411/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                <Image  src="/linkedin.svg" alt="My Logo" width={24} height={100} className='cursor-pointer' />
            </Link>
            <Link href="https://x.com/AthenaVentur4" target="_blank" rel="noopener noreferrer">
                <Image  src="/twitter.svg" alt="My Logo" width={24} height={100} className='cursor-pointer' />
            </Link>
        </div>
        <div className='flex flex-row justify-between items-end pb-4'>
            <div className='flex flex-col gap-4'>
                <p className='font-(family-name:--font-ibarra-italic) text-[16px] opacity-60 tracking-[-0.5%]'>
                    (In a good way ofc)
                </p>
                <p className='font-(family-name:--font-fustat) text-[16px] tracking-[-0.5%]'>
                    Once you have worked with us, you<br />wouldn’t want to work with anyone else.
                </p>
            </div>
            <p className='font-(family-name:--font-fustat) text-[16px] tracking-[-0.5%]'>
                athenaventura@gmail.com
            </p>
            <p className='font-(family-name:--font-fustat) text-[16px] tracking-[-0.5%]'>
                © 2026 Athena Ventura
            </p>
        </div>
    </div>
  )
}
