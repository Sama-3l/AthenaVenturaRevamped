'use client'

import { useEffect, useState } from 'react'

const ASSETS = [
  '/cricklo_mockup_2.png',
  '/soho_website_image.png',
  '/helios_website_image.png',
  '/bettersplit_image.png',
]

export function LoadingScreen({ onComplete, gradientLoaded }: { 
  onComplete: () => void
  gradientLoaded: boolean 
}) {
  const [imageProgress, setImageProgress] = useState(0)

  useEffect(() => {
    // Force complete after 4s no matter what
    const safety = setTimeout(() => {
        onComplete()
    }, 400)

    return () => clearTimeout(safety)
    }, [onComplete])

  useEffect(() => {
    let loaded = 0
    const total = ASSETS.length

    const onLoad = () => {
      loaded++
      setImageProgress(loaded / total)
    }

    ASSETS.forEach(src => {
      const img = new Image()
      img.onload = onLoad
      img.onerror = onLoad
      img.src = src
    })
  }, [])

  const progress = Math.round((imageProgress * 0.8 + (gradientLoaded ? 1 : 0) * 0.2) * 100)

  useEffect(() => {
    if (progress >= 100) onComplete()
  }, [progress, onComplete])

  return (
    <div className="loading-screen">
      <h1 className="logo">Athena Ventura</h1>
      <div className="loading-bar">
        <div className="loading-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}