import { LanguageOptions } from "@/types/language/LanguageOptions"
import { PortableTextBlock } from '@portabletext/types'
import { SupportedLanguageTypes } from "@/configs"

export interface GuardianInfoPageContent {
  header: Record<LanguageOptions, string>
  intro: Record<LanguageOptions, PortableTextBlock>
  subHeading: Record<LanguageOptions, string>
  description: Record<LanguageOptions, PortableTextBlock>
  guardianImage: {
    altText: Record<SupportedLanguageTypes, string>
    asset: {
      url: string
    }
  }
}