import { LanguageOptions } from '@/types/language'
import { BenefitsSectionContent, JoinSanitySection } from '.'
import { PortableTextBlock } from '@portabletext/types'
import { Position } from './position'

export interface JoinUsSanityContent {
  benefitsSection: BenefitsSectionContent
  pageTitle: Record<LanguageOptions, string>
  field: Record<LanguageOptions, PortableTextBlock>
  joinSection: JoinSanitySection
  positions: Position[]
  descImage: {
    asset: {
      url: string
    }
  }
}
