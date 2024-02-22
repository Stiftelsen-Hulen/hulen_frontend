import { LanguageOptions } from '@/types/language'
import {
  BenefitsSectionContent,
  JoinSanitySection,
  JoinUsNavigationButton,
  PositionDescriptionSection,
} from '.'
import { PortableTextBlock } from '@portabletext/types'
import { Position } from './position'
import { SanityImage } from '..'

export interface JoinUsSanityContent {
  benefitsSection: BenefitsSectionContent
  pageTitle: Record<LanguageOptions, string>
  ingress: Record<LanguageOptions, PortableTextBlock>
  joinSection: JoinSanitySection
  positions: Position[]
  descImage: SanityImage
  positionPreface: PositionDescriptionSection
  navigationButtons: JoinUsNavigationButton[]
}
