import { LanguageOptions } from '@/types/language'
import { PortableTextBlock } from '@portabletext/types'

export interface PositionDescriptionSection {
  header: Record<LanguageOptions, string>
  content: Record<LanguageOptions, PortableTextBlock>
}
