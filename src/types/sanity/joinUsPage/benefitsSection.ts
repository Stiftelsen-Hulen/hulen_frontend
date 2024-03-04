import { LanguageOptions } from '@/types/language'
import { PortableTextBlock } from '@portabletext/types'
import { SanityImage } from '..'

export interface BenefitsSectionContent {
  content: Record<LanguageOptions, PortableTextBlock>
  header: Record<LanguageOptions, string>
  descImage: SanityImage
}
