import { LanguageOptions } from '@/types/language'
import { PortableTextBlock } from '@portabletext/types'

export interface JoinSanitySection {
  content: Record<LanguageOptions, PortableTextBlock>
  email: string
  emailPreface: Record<LanguageOptions, string>
  header: Record<LanguageOptions, string>
}
