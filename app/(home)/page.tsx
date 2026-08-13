'use client'

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from 'react'
import WhatWeDo from "./_sections/WhatWeDo/WhatWeDo";
import WhatWeDid from "./_sections/WhatWeDid/WhatWeDid";
import TheCompany from "./_sections/TheCompany/TheCompany";
import WhatWeOffer from "./_sections/WhatWeOffer/WhatWeOffer";
import ReachOutToUs from "./_sections/ReachOutToUs/ReachOutToUs";
import { GradienBackground } from "../_components/gradient_background";
import { LoadingScreen } from "../_components/loading/Loading";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window
    // Normalize mouse to -1 → 1 range from center
    const x = (e.clientX / innerWidth - 0.5) * 2
    const y = (e.clientY / innerHeight - 0.5) * 2

    const images = containerRef.current?.querySelectorAll<HTMLElement>('.hero-image')
    images?.forEach((img, i) => {
      // Each image gets a different depth factor
      const depth = (i + 1) * 10
      img.style.transform = `translate(${x * depth}px, ${y * depth}px)`
    })
  }

  

  const handleMouseLeave = () => {
    const images = containerRef.current?.querySelectorAll<HTMLElement>('.hero-image')
    images?.forEach((img) => {
      img.style.transform = 'translate(0px, 0px)'
    })
  }

  const [loaded, setLoaded] = useState(true)
  const [gradientLoaded, setGradientLoaded] = useState(false)

  const handleComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  // useEffect(() => {
  //   if (!loaded) {
  //     document.body.style.overflow = 'hidden'
  //   } else {
  //     document.body.style.overflow = ''
  //   }

  //   return () => {
  //     document.body.style.overflow = ''
  //   }
  // }, [loaded])

  const handleGradientLoad = useCallback(() => setGradientLoaded(true), [])

  return (
    <div className="w-full">
      {/* {!loaded && <LoadingScreen onComplete={handleComplete} gradientLoaded={gradientLoaded}/>} */}
      <div style={{ visibility: loaded ? 'visible' : 'hidden' }}>
        <div className="flex flex-col">
          <section id="home" >
            <div className="relative h-[150vh] ">
              <GradienBackground />          
              <div
                ref={containerRef}
                className="hero-container relative top-0 w-full h-screen flex items-center justify-center z-10 bg-transparent"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <h1 className="logo">Athena Ventura</h1>
                <div className="hero-image image-1">
                  <Image src="/cricklo_mockup_2.png" alt="" width={800} height={800} />
                </div>
                <div className="hero-image image-2">
                    <Image
                      className="image-default"
                      src="/soho_website_image.png"
                      alt=""
                      width={800}
                      height={800}
                    />
                  {/* <div className="image-swap-container">
                    <Image
                      className="image-hover"
                      src="/soho/soho_showcase.gif"
                      alt=""
                      width={800}
                      height={800}
                    />
                  </div> */}
                </div>
                <div className="hero-image image-3">
                    <Image className="image-default" src="/helios_website_sample.png" alt="" width={800} height={800} />
                  {/* <div className="image-swap-container">
                    <Image className="image-hover" src="/helios_showcase.gif" alt="" width={800} height={800} unoptimized/>
                  </div> */}
                </div>
                <div className="hero-image image-4">
                  <Image src="/bettersplit_image.png" alt="" width={800} height={800} />
                </div>
                <p className="hero-para para-1">
                  Great design starts with thinking outside the box. In some cases, it’s the layout box that we are talking about.
                </p>
                <p className="hero-para para-2">
                  Two Co-Founders curating designs and software from ideation to production.
                </p>
              </div> 
              <div className="relative h-full bg-transparent">

              </div>
            </div>
          </section>
          <section id="what-we-do">
            <div data-theme="inverted">
              <WhatWeDo />
            </div>
          </section>
          <section id="what-we-did">
          <div data-theme="default">
            <WhatWeDid />
          </div>
          </section>
          <section id="the-company">
          <div data-theme="inverted">
            <TheCompany />
          </div>
          </section>
          <section id="what-we-offer">
          <div data-theme="default">
            <WhatWeOffer />
          </div>
          </section>
          <section id="reach-out">
          <div data-theme="default">
            <ReachOutToUs />
          </div>  
          </section>
        </div>
      </div>
    </div>
  )
}