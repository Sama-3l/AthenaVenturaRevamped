'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './styles/work_card.module.css'
import ImageCarousel from '../image_carousel/image_carousel'

interface WorkCardProps {
  title: string
  subtitle: React.ReactNode
  body: string
  images: string[]
  tags: string[]
  tagTextColor? : string
  backgroundColor?: string
  textColor?: string
  tagBackgroundColor? : string
}

export default function WorkCard({ title, subtitle, body, images, tags, backgroundColor = 'var(--color-background)', textColor = 'var(--color-foreground)', tagTextColor = 'var(--color-background)', tagBackgroundColor = 'var(--color-foreground)' }: WorkCardProps) {

  return (
    <div
      className={styles.card}
      style={{ backgroundColor }}
    >
      {/* Top section - always visible */}
      <div className={`pb-8 ${styles.card_top}`}>
        <div className={styles.tags_row}>
          {tags.map((tag, i) => (
            <span key={i} className={styles.tag} style={{ color: tagTextColor, background: tagBackgroundColor }}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.content_row}>
          <div className={styles.title_block}>
            <p className={`whitespace-pre-line ${styles.title_line}`} style={{ color: textColor }}>
              <strong>{title}</strong> : {subtitle}
            </p>
          </div>
          <p className={styles.body_text} style={{ color: textColor }}>
            {body}
          </p>
        </div>
      </div>

      <ImageCarousel images={images} />
      <div className='h-12'></div>
    </div>
  )
}