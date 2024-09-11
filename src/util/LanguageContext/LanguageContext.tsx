'use client'
import type { LanguageOptions } from '@/types/language'
import React, { createContext, useState, useContext, useCallback, useEffect } from 'react'

interface LanguageContextProps {
  language: LanguageOptions
  changeLanguage: (lang: LanguageOptions) => void
}

// Initialize context with default values (they won't actually be used as the real values are provided by the provider)
const LanguageContext = createContext<LanguageContextProps>({
  language: 'no',
  changeLanguage: () => console.log('This is just an empty statement for declaration purposes'),
})

export const useLanguage = () => {
  return useContext(LanguageContext)
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LanguageOptions>('no')
  const [isHydrated, setIsHydrated] = useState(false)

  /**
   * If the language is stored in localStorage, use that, else use the browser language.
   * Hydration is done to prevent a flash of the wrong language on the page.
   */
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as LanguageOptions
    if (storedLanguage) {
      setLanguage(storedLanguage)
    } else if (navigator.language) {
      const lang = navigator.language
      if (lang === 'nb' || lang === 'nn') {
        setLanguage('no')
      } else {
        setLanguage('en')
      }
    }
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const changeLanguage = useCallback((lang: LanguageOptions) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }, [])

  if (!isHydrated) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
