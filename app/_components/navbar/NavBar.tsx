"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './navbar.module.css'
import { useTheme } from '@/app/lib/ThemeContext'

export default function NavBar() {
  const [hovered, setHovered] = useState(false)
  const theme = useTheme()

  return (
    <div className={`${styles.navbar} ${theme === 'inverted' ? styles.navbar_inverted : ''}`}>
      <Image className={styles.logo} src="/logo_white.svg" alt="My Logo" width={36} height={100} />
      <div
        className={styles.menu}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {['What we do', 'What we did', 'The Company', 'What we offer', 'Reach out to us'].map((item) => (
          <div key={item} className={styles.menu_item}>
            <span className={`${styles.text} ${hovered ? styles.text_visible : ''}`}>{item}</span>
            <div className={`${styles.dot} ${hovered ? styles.dot_hidden : ''}`} />
          </div>
        ))}
      </div>
    </div>
  )
}