import PageHeader from '@/app/_components/page_header'
import React from 'react'
import styles from './styles/the_company.module.css';
import Image from 'next/image';
import ThrowingPhotos from './_components/Throwing Photos/throwing_photos';

export default function TheCompany() {
  return (
    <div className='flex flex-col'>
        <div className='h-20' />
        <div className='bg-(--color-foreground) h-svh'>
          <PageHeader title='The Company' />
          <div className='py-8 px-12 flex flex-rol justify-between'>
            <p className={`font-bold tracking-[-5%] ${styles.body_text}`}>WE</p>
            <div className='flex flex-col'> 
              <p className={`font-bold tracking-[-5%] ${styles.body_text}`}>OUR FORTÉ</p>
              <p className={`font-bold tracking-[-5%] ${styles.body_text}`}>OUR HOBBY</p>
              <p className={`font-bold tracking-[-5%] ${styles.body_text}`}>OUR SPECIALITY</p>
            </div>
            <p className={`font-bold tracking-[-5%] ${styles.body_text}`}>ARE</p>
            <div className='flex flex-col'> 
              <p className={`font-bold tracking-[-5%] ${styles.body_text}`}>DESIGN</p>
              <p className={`font-bold tracking-[-5%] ${styles.body_text}`}>DEVELOPMENT</p>
              <p className={`font-bold tracking-[-5%] ${styles.body_text}`}>DEPLOYMENT</p>
            </div>
            <p className={`font-bold tracking-[-5%] ${styles.body_text}`}>NERDS</p>
          </div>
          <div className='px-12 pb-12 justify-items-center align-middle'>
            <p className={`font-normal w-90 tracking-[-0.5%] ${styles.body_text}`}>
              We develop software that we would ourselves use, keeping in mind the pinnacle of design & development. We are young, learning through our work and around it.
            </p>
          </div>
          <div className='relative px-12 pb-12 flex flex-row justify-between items-end'>
            <div className='absolute w-1/2 h-[60vh]'>
            <ThrowingPhotos photo1='/Siddhartha_1.png' photo2='/Rishi_1.png' />
            </div>
            <p className={`font-normal w-90 tracking-[-0.5%] ${styles.body_text}`}>
              We guide you to create production level software & websites from your starting point of an idea.
            </p>
            <Image src="/Siddhartha_n_Rishi.png" alt="" width={400} height={400} />
          </div>
        </div>
    </div>
  )
}
