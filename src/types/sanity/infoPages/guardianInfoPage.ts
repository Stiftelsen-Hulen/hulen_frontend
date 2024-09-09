import type { LanguageOptions } from '@/types/language'
import type { LocalePortableTextBlock } from '../genericPage'
import type { SanityImageWithLocaleAlt } from '../sanityImage'

export interface GuardianInfoPageContent {
  header: Record<LanguageOptions, string>
  intro: LocalePortableTextBlock
  subHeading: Record<LanguageOptions, string>
  description: LocalePortableTextBlock
  guardianImage: SanityImageWithLocaleAlt
}
