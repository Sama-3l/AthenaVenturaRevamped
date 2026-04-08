import { useEffect, useState } from 'react'

export function useThemeOnScroll(): 'default' | 'inverted' {
  const [theme, setTheme] = useState<'default' | 'inverted'>('default')

  useEffect(() => {
    const getTheme = () => {
      const sections = document.querySelectorAll<HTMLElement>('[data-theme]')
      const viewportMid = window.innerHeight / 2

      let current: 'default' | 'inverted' = 'default'

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
          current = section.dataset.theme === 'inverted' ? 'inverted' : 'default'
        }
      })

      setTheme(current)
    }

    getTheme() // run on mount
    window.addEventListener('scroll', getTheme, { passive: true })
    return () => window.removeEventListener('scroll', getTheme)
  }, [])

  return theme
}