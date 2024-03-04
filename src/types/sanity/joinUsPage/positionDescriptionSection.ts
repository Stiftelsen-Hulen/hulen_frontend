import { LanguageOptions } from '@/types/language'
import { PortableTextBlock } from '@portabletext/types'
import { SanityImage } from '..'

export interface PositionDescriptionSection {
  header: Record<LanguageOptions, string>
  content: Record<LanguageOptions, PortableTextBlock>
  descImage: SanityImage
}
