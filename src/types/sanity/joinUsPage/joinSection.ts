import type { LanguageOptions } from '@/types/language'
import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImage } from '..'

export interface JoinSanitySection {
  content: Record<LanguageOptions, PortableTextBlock>
  email: string
  emailPreface: Record<LanguageOptions, string>
  header: Record<LanguageOptions, string>
  icon: SanityImage
}
