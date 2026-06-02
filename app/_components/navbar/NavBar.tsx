"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import { useTheme } from '@/app/lib/ThemeContext'
import { usePathname, useRouter } from 'next/navigation'

export default function NavBar() {
  const [hovered, setHovered] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const theme = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  const menuItems = [
    { label: 'What we do', id: 'what-we-do' },
    { label: 'What we did', id: 'what-we-did' },
    { label: 'The Company', id: 'the-company' },
    { label: 'What we offer', id: 'what-we-offer' },
    { label: 'Reach out to us', id: 'reach-out' },
  ]
  
  const scrollToSection = (id: string) => {
    if (pathname !== '/') {
      router.push(`/#${id}`)
      return
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.2, // adjust based on feel
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`${styles.navbar} ${theme === 'inverted' ? styles.navbar_inverted : ''}`}>
      <div className={`${styles.overlay} ${hovered ? styles.overlay_visible : ''}`} />
      <Image className={styles.logo} src="/logo_white.svg" alt="My Logo" width={36} height={100} onClick={() => pathname !== '/' ? router.push('/') : scrollToSection("home")} />
      
      <div
        className={styles.menu}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {menuItems.map((item) => {
          const isActive = activeSection === item.id
          return (
            <div
              key={item.id}
              className={`${styles.menu_item} ${isActive ? styles.active : ''} gap-2`}
              onClick={() => scrollToSection(item.id)}
            >
              <span className={`${styles.text} ${hovered ? styles.text_visible : ''}`}>
                {item.label}
              </span>

              <div
                className={`${styles.dot} 
                  ${hovered || isActive ? styles.dot_hidden : ''}
                  ${isActive ? styles.dot_active : ''}`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}