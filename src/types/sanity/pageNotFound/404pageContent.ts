import { SupportedLanguageTypes } from '@/configs'

export interface Sanity404Page {
  notFoundImage: {
    altText: Record<SupportedLanguageTypes, string>
    asset: {
      url: string
    }
  }
  infotext: Record<SupportedLanguageTypes, string>
  backbuttonlabel: Record<SupportedLanguageTypes, string>
}
