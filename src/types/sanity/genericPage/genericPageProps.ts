import { LanguageOptions } from '@/types/language'
import { PortableTextBlock } from '@portabletext/types'

export interface GenericPageProps {
  locale: Record<LanguageOptions, PortableTextBlock[]>
}
