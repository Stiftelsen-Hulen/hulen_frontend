import type { LanguageOptions } from '@/types/language'
import type { PortableTextBlock } from '@portabletext/types'

export interface SanityFooterElements {
  sortOrder: number
  footerElement: {
    [K in LanguageOptions]: PortableTextBlock[]
  }
}
