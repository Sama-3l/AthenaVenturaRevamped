'use client'
import { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'default' | 'inverted'

const ThemeContext = createContext<Theme>('default')

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('default')

  useEffect(() => {
    const getTheme = () => {
      const sections = document.querySelectorAll<HTMLElement>('[data-theme]')
      const viewportMid = window.innerHeight * 0.8
      let current: Theme = 'default'

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
          current = section.dataset.theme === 'inverted' ? 'inverted' : 'default'
        }
      })

      setTheme(current)
    }

    getTheme()
    window.addEventListener('scroll', getTheme, { passive: true })
    return () => window.removeEventListener('scroll', getTheme)
  }, [])

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)