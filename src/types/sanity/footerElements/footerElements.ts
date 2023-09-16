import { PortableTextBlock } from '@portabletext/types'
import { LanguageOptions } from '@/types/language'

export interface SanityFooterElements {
  sortOrder: number
  footerElement: {
    [K in LanguageOptions]: PortableTextBlock[]
  }
}
