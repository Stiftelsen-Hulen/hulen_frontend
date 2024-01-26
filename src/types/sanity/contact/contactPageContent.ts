import { LanguageOptions } from '@/types/language'
import { PortableTextBlock } from '@portabletext/types'
import { ContactInfo } from './contact'
import { SupportedLanguageTypes } from '@/configs'

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
