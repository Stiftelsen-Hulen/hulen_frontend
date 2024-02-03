import { LanguageOptions } from '@/types/language'
import { PortableTextBlock } from '@portabletext/types'

export interface BenefitsSectionContent {
  content: Record<LanguageOptions, PortableTextBlock>
  header: Record<LanguageOptions, string>
  descImage: {
    asset: {
      url: string
    }
  }
}
