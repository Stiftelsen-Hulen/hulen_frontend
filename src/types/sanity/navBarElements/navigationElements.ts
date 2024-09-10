import type { SupportedLanguageTypes } from '@/configs'
import type { SanityImageWithLocaleAlt } from '../sanityImage'

export interface SanityNavBarContent {
  navElements: SanityNavElement[]
  navbarLogo: SanityImageWithLocaleAlt
}

export interface SanityNavElement {
  subUrl: string
  title: Record<SupportedLanguageTypes, string>
  subNavElements: SanityNavElement[]
}
