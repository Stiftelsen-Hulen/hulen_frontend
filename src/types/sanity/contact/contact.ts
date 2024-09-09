import type { SupportedLanguageTypes } from '@/configs'

export interface ContactInfo {
  title: Record<SupportedLanguageTypes, string>
  name: string
  email: string
  phone: string
}
