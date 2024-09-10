import type { LanguageOptions } from '@/types/language'
import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImage } from '..'

export interface PositionDescriptionSection {
  header: Record<LanguageOptions, string>
  content: Record<LanguageOptions, PortableTextBlock>
  descImage: SanityImage
}
