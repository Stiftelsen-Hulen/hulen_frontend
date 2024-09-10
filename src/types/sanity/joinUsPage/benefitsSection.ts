import type { LanguageOptions } from '@/types/language'
import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImage } from '..'

export interface BenefitsSectionContent {
  content: Record<LanguageOptions, PortableTextBlock>
  header: Record<LanguageOptions, string>
  descImage: SanityImage
}
