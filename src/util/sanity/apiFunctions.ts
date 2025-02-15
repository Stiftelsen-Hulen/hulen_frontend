import type { SanityNavBarContent } from '@/types/sanity'
import type { SanityContactPageContent } from '@/types/sanity/contact'
import type { SanityFooterElements } from '@/types/sanity/footerElements/footerElements'
import type { GenericPageProps } from '@/types/sanity/genericPage/genericPageProps'
import type { GuardianInfoPageContent } from '@/types/sanity/infoPages/guardianInfoPage'
import type { TechInfoPageContent } from '@/types/sanity/infoPages/techInfoPage'
import type { JoinUsSanityContent, Position } from '@/types/sanity/joinUsPage'
import type { Sanity404Page } from '@/types/sanity/pageNotFound'
import type { TranslationObject } from '@/types/sanity/translationObject'
import {
  getContactPageGroq,
  getFooterElementsGroq,
  getGuardianInfoPageGroq,
  getJoinUsPageGroq,
  getNavigationElementsGroq,
  getNoPageFoundGroq,
  getPagePropsGroq,
  getTechInfoPageGroq,
  getTranslationObjectGroq,
  joinEmailFormApiResponse,
  getPositionsGroq,
} from './groqQueries'
import { sanityClient } from './sanityClient'
import type { JoinFormEmailResponse } from '@/types/sanity/joinFormEmailApiResponse'

/**
 * This file contains utility functions to fetch data from Sanity using GROQ queries
 */

export async function getSanityNavigationElements() {
  return await sanityClient.fetch<SanityNavBarContent>(getNavigationElementsGroq)
}

export async function getFooterElements() {
  return await sanityClient.fetch<SanityFooterElements[]>(getFooterElementsGroq)
}

export async function get404PageContent() {
  return await sanityClient.fetch<Sanity404Page>(getNoPageFoundGroq)
}

export async function getHomePageContent() {
  return await sanityClient.fetch<GenericPageProps>(getPagePropsGroq('home'))
}

export async function getAboutUsContent() {
  return await sanityClient.fetch<GenericPageProps>(getPagePropsGroq('aboutUs'))
}

export async function getAccessibilityPageProps() {
  return await sanityClient.fetch<GenericPageProps>(getPagePropsGroq('accessibility'))
}

export async function getContactPageContent() {
  return await sanityClient.fetch<SanityContactPageContent>(getContactPageGroq)
}

export async function getJoinUsPageContent() {
  return await sanityClient.fetch<JoinUsSanityContent>(getJoinUsPageGroq)
}

export async function getTechInfoPageContent() {
  return await sanityClient.fetch<TechInfoPageContent>(getTechInfoPageGroq)
}

export async function getTranslationObject(identifier: string) {
  return await sanityClient.fetch<TranslationObject>(getTranslationObjectGroq(identifier))
}

export async function getGuardianInfoPageContent() {
  return await sanityClient.fetch<GuardianInfoPageContent>(getGuardianInfoPageGroq)
}

export async function getJoinFormEmailResponse() {
  return await sanityClient.fetch<JoinFormEmailResponse>(joinEmailFormApiResponse)
}

export async function getPositions() {
  return await sanityClient.fetch<Position[]>(getPositionsGroq)
}
