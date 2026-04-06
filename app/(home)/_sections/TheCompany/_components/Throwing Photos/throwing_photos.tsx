'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './styles/throwing_photos.module.css'

export default function ThrowingPhotos({ photo1, photo2 }: { photo1: string, photo2: string }) {
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>

        {/* Top photo - photo1, tilted left */}
        <div className={`${styles.photo} ${styles.photo_top} ${visible ? styles.photo_top_visible : ''}`}>
        <Image src={photo1} alt="" width={600} height={800} style={{ width: '100%', height: 'auto' }} />
        </div>

        {/* Bottom photo - photo2, tilted right */}
        <div className={`${styles.photo} ${styles.photo_bottom} ${visible ? styles.photo_bottom_visible : ''}`}>
        <Image src={photo2} alt="" width={600} height={800} style={{ width: '100%', height: 'auto' }} />
        </div>

    </div>
  )
}