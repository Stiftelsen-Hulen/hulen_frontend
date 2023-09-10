import { SupportedLanguageTypes } from '@/configs'

export interface SanityNavBarContent {
  navElements: SanityNavElement[]
  navbarLogo: {
    altText: Record<SupportedLanguageTypes, string>
    asset: {
      url: string
    }
  }
}

export interface SanityNavElement {
  subUrl: string
  title: Record<SupportedLanguageTypes, string>
}
