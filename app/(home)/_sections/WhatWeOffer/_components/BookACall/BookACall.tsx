import React from 'react'
import styles from './styles/BookACall.module.css'

export default function BookACall({ bgColor = 'var(--color-background)', textColor = 'var(--color-foreground)' }: { bgColor?: string, textColor?: string }) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      className={styles.btn}
      style={{ backgroundColor: bgColor, color: textColor }}
      data-text="Book a call"
      onClick={() => scrollToSection("reach-out")}
    >
      <span className={styles.btn_text}>Book a call</span>
    </button>
  )
}