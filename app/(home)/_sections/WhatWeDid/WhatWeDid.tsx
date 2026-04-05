import React from 'react'
import styles from './styles/what_we_did.module.css';
import PageHeader from '@/app/_components/page_header';
import SolutionTag from './_components/solution_tag';
import Image from 'next/image';
import ImageCarousel from './_components/image_carousel/image_carousel';

const tags = ["UI/UX", "Development", "Concept", "MVP", "App Store", "Play Store", "Cross-Platform", "GCP", "AWS"];
const images = ["/Theo/theo_logo.png", "/Theo/theo_preview.png", "/Soho/soho_website_image.png", "/Cricklo/cricklo_4.png"]

export default function WhatWeDid() {
  return (
    <div className={styles.section}>
      <PageHeader title="What we did" className='text-(--color-foreground) border-(--color-foreground)'/>
      <div className='flex flex-row w-full pt-8'>
        
        {/* Left - paragraph */}
        <div className='w-1/2 px-12 pt-16'>
          <p className={`${styles.body_text} w-[80%]`}>
            Pioneering in UI/UX design and development of all sorts, we have worked in a few niches. We have collaborated with brand agencies, built websites and apps MVPs and also helped brands maintain their current software.
          </p>              
        </div>

        {/* Right - carousel */}
        <div className='w-1/2 pr-12 flex items-end pb-4'>
          <div className={styles.carousel_container}>
            
            
            <div className={styles.carousel_wrapper}>
              <div className={styles.carousel_track}>
                {[...tags, ...tags].map((tag, index) => (
                  <SolutionTag key={index} tag={tag} />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
      <ImageCarousel />
      {/* <div className=' pt-10 w-full'>
        <div className={styles.image_carousel_track}>
          <div className={styles.image_set}>
            {images.map((image, index) => (
              <Image key={index} src={image} height={300} width={300} alt="" className="h-75 w-auto shrink-0"/>
            ))}
          </div>
          <div className={styles.image_set}>
            {images.map((image, index) => (
              <Image key={index} src={image} height={300} width={300} alt="" className="h-75 w-auto shrink-0"/>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}