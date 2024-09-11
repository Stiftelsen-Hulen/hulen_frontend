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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = sessionStorage.getItem('language') as LanguageOptions
      if (storedLanguage) {
        setLanguage(storedLanguage)
      }
      setIsHydrated(true)
    }
  }, [])

  const changeLanguage = useCallback((lang: LanguageOptions) => {
    setLanguage(lang)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('language', lang)
    }
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
