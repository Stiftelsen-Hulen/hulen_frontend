import type { SupportedLanguageTypes } from '@/configs'
import type { LanguageOptions } from '@/types/language'
import type { PortableTextBlock } from '@portabletext/types'
import type { ContactInfo } from './contact'

export interface SanityContactPageContent {
  contactList: ContactInfo[]
  booking: {
    title: Record<SupportedLanguageTypes, string>
    email: string
  }
  headerInfoBlock: {
    [K in LanguageOptions]: PortableTextBlock[]
  }
}
