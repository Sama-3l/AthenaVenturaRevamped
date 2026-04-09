import React from 'react'
import styles from './styles/what_we_did.module.css';
import PageHeader from '@/app/_components/page_header';
import SolutionTag from './_components/solution_tag';
import Image from 'next/image';
import ImageCarousel from './_components/image_carousel/image_carousel';
import WorkCard from './_components/work_card/work_card';

const tags = ["UI/UX", "Development", "Concept", "MVP", "App Store", "Play Store", "Cross-Platform", "GCP", "AWS"];
const images = ["/Theo/theo_logo.png", "/Theo/theo_preview.png", "/Soho/soho_website_image.png", "/Cricklo/cricklo_4.png"]

export default function WhatWeDid() {
  return (
    <div className='flex flex-col'>
      <div className={styles.section}>
        <PageHeader title="What we did" className='text-(--color-foreground) border-(--color-foreground)'/>
        <div className='flex flex-row w-full pt-8 pb-10'>
          
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
        <ImageCarousel images={["/Theo/theo_logo.png", "/Theo/theo_preview.png", "/Soho/soho_website_image.png", "/Cricklo/cricklo_4.png"]}/> 
    </div>
    <div className='h-[50vh] bg-(--color-background)'></div>
      
    <div className='flex flex-col'>
      <WorkCard
        title="Oruphones"
        subtitle={<>Marketplace for <br/>old, refurbished and used phones</>}
        body="Siddhartha worked with them on feature development and a lot of bug maintenance on their Flutter application. Weekly sprints, review system development, managing the App and Play Store releases, etc."
        tags={["Retainer", "Maintenance", "Feature Development"]}
        images={["/Oruphones/oruphones_1.png", "/Oruphones/oruphones_2.png", "/Oruphones/oruphones_3.png", "/Oruphones/oruphones_4.png"]}
        backgroundColor="var(--color-background)"
      />
      <WorkCard
        title="Cricklo"
        subtitle={<>Cricket scoring <br/>& tournament management app</>}
        body="We did an accelerated development cycle in collaboration with an agency that had a client with this MVP requirement. Built from ground-up, full-stack with a template dashboard. Implementing realtime-scoring, game engine, tournament mechanism and what not while also navigating really poor client commmunication."
        tags={["UI/UX", "Production Lifecycle", "MVP Development"]}
        images={["/Cricklo/cricklo_1.png", "/Cricklo/cricklo_2.png", "/Cricklo/cricklo_3.png", "/Cricklo/cricklo_4.png"]}
        backgroundColor="#EF5423"
      />
      <WorkCard
        title="distr1ct.one"
        subtitle={<>Pause, work, chat,<br/>coffee. A cafe in Lucknow.</>}
        body="A concept website for a new & different coffee place in Lucknow. They already had the brand design and menu, etc. done. The idea behind the website was to tell the story behind the store, welcome the audience make the place their comfort stop for work, meeting friends, etc. and business SEO."
        tags={["UI/UX", "Concept", "Framer Development"]}
        images={["/District/district_1.png", "/District/district_2.png", "/District/district_3.png", "/District/district_4.png", "/District/district_5.png"]}
        backgroundColor="#465840"
      />
    </div>
  </div>
    
  )
}