import PageHeader from '@/app/_components/page_header'
import React from 'react'
import styles from './styles/reach_out_to_us.module.css'
import CalComponent from './_components/Cal';
import ContactForm from './_components/form/contact_form';

export default function ReachOutToUs() {
  return (
    <div>
        <PageHeader title='Reach out to us' className = "text-(--color-foreground) border-(--color-foreground)"/>
        
        <div className='flex flex-row py-12'>
            <div className='flex flex-col gap-8'>
                <div className='px-6'>
                    <h2 className={styles.page_title}>
                        Work with us
                    </h2>
                </div>
                <div className='flex flex-col gap-1 px-8'>
                    <p className={styles.page_body}>
                    Book a call with us or drop us an email at:
                    </p>
                    <p className={`font-extrabold ${styles.page_body} underline`}>
                        athenaventura@gmail.com
                    </p>
                </div>
            </div>
            <CalComponent />
            
        </div>
        <div className='flex flex-row pt-15 pb-12'>
            <div className='flex flex-col gap-8 '>
                <div className='px-6'>
                    <h2 className={styles.page_title}>
                        Contact Us
                    </h2>
                </div>
                <div className='flex flex-col gap-1 px-8 w-[70%]'>
                    <p className={styles.page_body}>
                    We are a small creative studio-cum-software development firm dedicated to launch of new ventures and transforming established brands. We curate captivating designs that lead our teams to bring your ideas and visions to life.<br /><br /><br />Building brands, apps and websites our team is here to help you start, grow or elevate your enterprise.
                    </p>
                </div>
            </div>
            <ContactForm />
        </div>
    </div>
  )
}
