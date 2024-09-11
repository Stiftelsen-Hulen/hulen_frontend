'use client'
import type { LanguageOptions } from '@/types/language'
import React, { createContext, useState, useContext, useCallback } from 'react'

interface LanguageContextProps {
  language: LanguageOptions
  changeLanguage: (lang: LanguageOptions) => void
}

// Initialize context with default values (they won't actually be used as the real values are provided by the provider)
const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  changeLanguage: () => console.log('This is just an empty statement for declaration purposes'),
})

export const useLanguage = () => {
  return useContext(LanguageContext)
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LanguageOptions>(() => {
    if (typeof window !== 'undefined') {
      return (sessionStorage.getItem('language') as LanguageOptions) || 'en'
    }

    return 'en'
  })

  const changeLanguage = useCallback((lang: LanguageOptions) => {
    setLanguage(lang)
    if (typeof window !== 'undefined') {
      console.log('Setting language to: ', lang)
      sessionStorage.setItem('language', lang)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
