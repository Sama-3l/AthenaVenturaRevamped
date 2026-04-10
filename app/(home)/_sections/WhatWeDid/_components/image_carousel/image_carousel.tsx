'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './styles/image_carousel.module.css'

export default function ImageCarousel({images} : {images : string[]}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, scrollLeft: 0 })
  const scrollPos = useRef(0)
  const animationRef = useRef<number>(0)

  // Auto scroll
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const animate = () => {
      if (!isDragging) {
        scrollPos.current += hovered ? 0.3 : 1
        const half = track.scrollWidth / 2
        if (scrollPos.current >= half) scrollPos.current = 0
        track.style.transform = `translateX(-${scrollPos.current}px)`
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationRef.current!)
  }, [hovered, isDragging])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    dragStart.current = { x: e.clientX, scrollLeft: scrollPos.current }
  }

  const handleMouseUp = () => setIsDragging(false)

  const handleMouseDrag = (e: React.MouseEvent) => {
    if (!isDragging) return
    const dx = e.clientX - dragStart.current.x
    const track = trackRef.current
    if (!track) return
    const half = track.scrollWidth / 2
    let next = dragStart.current.scrollLeft - dx
    if (next < 0) next = 0
    if (next >= half) next = half - 1
    scrollPos.current = next
    track.style.transform = `translateX(-${next}px)`
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    dragStart.current = { x: e.touches[0].clientX, scrollLeft: scrollPos.current }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const dx = e.touches[0].clientX - dragStart.current.x
    const track = trackRef.current
    if (!track) return
    const half = track.scrollWidth / 2
    let next = dragStart.current.scrollLeft - dx
    if (next < 0) next = 0
    if (next >= half) next = half - 1
    scrollPos.current = next
    track.style.transform = `translateX(-${next}px)`
  }

  const handleTouchEnd = () => setIsDragging(false)

  return (
    <div
      className={`w-full relative ${styles.carousel_container}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setIsDragging(false) }}
      onMouseMove={(e) => { handleMouseMove(e); handleMouseDrag(e) }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Custom cursor */}
      {hovered && (
        <div
          className={styles.custom_cursor}
          style={{ left: cursorPos.x, top: cursorPos.y }}
        >
          <span className={styles.cursor_text}>Drag to scroll</span>
        </div>
      )}

      <div className={styles.image_carousel_track} ref={trackRef}>
        <div className={styles.image_set}>
          {images.map((image, index) => (
            <Image key={index} src={image} height={300} width={300} alt="" unoptimized loading="eager" className="h-60 md:h-75 w-auto shrink-0 pointer-events-none" />
          ))}
        </div>
        <div className={styles.image_set}>
          {images.map((image, index) => (
            <Image key={index} src={image} height={300} width={300} alt="" unoptimized loading="eager" className="h-60 md:h-75 w-auto shrink-0 pointer-events-none" />
          ))}
        </div>
      </div>
    </div>
  )
}