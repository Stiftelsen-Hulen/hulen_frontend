import type { LanguageOptions } from '@/types/language'
import type { PortableTextBlock } from '@portabletext/types'

export interface AvailabilityPageDocument {
  language: LanguageOptions
  title: string
  content: PortableTextBlock[]
}

export type AvailabilityPageContent = Partial<Record<LanguageOptions, AvailabilityPageDocument>>
