"use client"
import React, { useEffect, useState } from 'react'
import styles from './cta.module.css'
import { useTheme } from '@/app/lib/ThemeContext'
import Link from 'next/link'

export default function Cta() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const theme = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className={`
      ${styles.cta_bar}
      ${visible ? styles.cta_visible : styles.cta_hidden}
      ${theme === 'inverted' ? styles.cta_inverted : ''}
    `}>
      <div className={styles.cta_note}>
        <div className={styles.dot}></div>
        <p>2 slots available for Apr'26</p>
      </div>
      <div className={styles.cta_buttons}>
        {/* <Link href="">
        </Link>         */}
          <button className={styles.btn_outline} onClick={() =>
              window.open("https://tally.so/r/0QJd16", "_blank", "noopener,noreferrer")
            } >Get a Free Idea Consultancy
          </button>
        <button className={styles.btn_primary} >Book a call</button>
      </div>
    </div>
  )
}