import type { SupportedLanguageTypes } from '@/configs'
import type { SanityImageWithLocaleAlt } from '../sanityImage'

export interface Sanity404Page {
  notFoundImage: SanityImageWithLocaleAlt
  infotext: Record<SupportedLanguageTypes, string>
  backbuttonlabel: Record<SupportedLanguageTypes, string>
}
