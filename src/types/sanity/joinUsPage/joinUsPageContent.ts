import type { LanguageOptions } from '@/types/language'
import type { PortableTextBlock } from '@portabletext/types'
import type {
  BenefitsSectionContent,
  JoinSanitySection,
  JoinUsNavigationButton,
  PositionDescriptionSection,
} from '.'
import type { SanityImage } from '..'
import type { Position } from './position'
import type { JoinEmailFormContent } from './joinEmailForm'

export interface JoinUsSanityContent {
  benefitsSection: BenefitsSectionContent
  pageTitle: Record<LanguageOptions, string>
  ingress: Record<LanguageOptions, PortableTextBlock>
  joinSection: JoinSanitySection
  positions: Position[]
  descImage: SanityImage
  positionPreface: PositionDescriptionSection
  navigationButtons: JoinUsNavigationButton[]
  joinEmailForm: JoinEmailFormContent
}
