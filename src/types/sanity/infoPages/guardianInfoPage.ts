import type { LanguageOptions } from '@/types/language/LanguageOptions'
import type { SanityImageWithLocaleAlt } from '../sanityImage'
import type { LocalePortableTextBlock } from '../genericPage/genericPageProps'

export interface GuardianInfoPageContent {
  header: Record<LanguageOptions, string>
  intro: LocalePortableTextBlock
  subHeading: Record<LanguageOptions, string>
  description: LocalePortableTextBlock
  guardianImage: SanityImageWithLocaleAlt
}
