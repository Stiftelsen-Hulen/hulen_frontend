import type { LanguageOptions } from '@/types/language'
import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImageWithLocaleAlt } from '..'

export type PositionShiftType = 'night_shift' | 'outside_regular'

export interface Position {
  title: Record<LanguageOptions, string>
  category: PositionShiftType
  description: Record<LanguageOptions, PortableTextBlock>
  descImage: SanityImageWithLocaleAlt
}
