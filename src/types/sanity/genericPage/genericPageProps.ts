import type { LanguageOptions } from '@/types/language'
import type { PortableTextBlock } from '@portabletext/types'

export type LocalePortableTextBlock = Record<LanguageOptions, PortableTextBlock[]>

export interface GenericPageProps {
  locale: LocalePortableTextBlock
}
