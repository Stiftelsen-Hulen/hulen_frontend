'use client'

import type { LanguageOptions } from '@/types/language'
import React, { createContext, useState, useContext, useCallback } from 'react'

interface LanguageContextProps {
  language: LanguageOptions
  changeLanguage: () => void
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
  const [language, setLanguage] = useState<LanguageOptions>('no')

  const changeLanguage = useCallback(() => {
    setLanguage((current) => (current === 'en' ? 'no' : 'en'))
  }, [])

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
