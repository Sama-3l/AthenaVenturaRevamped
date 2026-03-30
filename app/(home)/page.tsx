'use client'

import Image from "next/image";
import { useRef } from "react";

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

  return (
    <div
      ref={containerRef}
      className="flex heroGradient h-screen items-center justify-center bg-linear-(--my-gradient)"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="logo">Athena Ventura</h1>
      <div className="hero-image image-1">
        <Image src="/cricklo_mockup_2.png" alt="" width={8000} height={800} />
      </div>
      <div className="hero-image image-2">
        <Image src="/soho_website_image.png" alt="" width={8000} height={800} />
      </div>
      <div className="hero-image image-3">
        <Image src="/helios_website_image.png" alt="" width={8000} height={800} />
      </div>
      <div className="hero-image image-4">
        <Image src="/bettersplit_image.png" alt="" width={8000} height={800} />
      </div>
      <p className="hero-para para-1">
        Good design  starts with thinking outside the box. In some cases, it’s the layout box we are talking about.
      </p>
      <p className="hero-para para-2">
        Two Co-Founders curating designs and software from ideation to production.
      </p>
      
    </div>
  )
}