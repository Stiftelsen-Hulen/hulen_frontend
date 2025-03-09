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
  joinEmailFormApi,
  getPositionsGroq,
} from './groqQueries'
import { sanityClient } from './sanityClient'
import type { JoinFormEmailApi } from '@/types/sanity/joinFormEmailApi'
import NodeCache from 'node-cache'

/** Due to rapid increase in API calls noted in feb 2025, a throttle guard has been added.
 * This guard consist of a simple nodecache, with function name (+ modifier if applicable) as cache keys.
 * This ensure that any api call to sanity that is within the cache limit (60s) will rather return from cache
 * instead of performin api call. While the licence as time of writing allows for 500k api calls per month, this
 * can easily be consumed in local development if f.eks a rerender loop is produced.
 *
 * The downside of this approach is that updating sanity will take a bit longer to propogate to client, so a
 * 60 second lifecycle is implemented as baseline. This can be adjusted as needed.
 *
 */
const CACHE_LIFE_SECONDS = 60
export const sanityCache = new NodeCache({ stdTTL: CACHE_LIFE_SECONDS })

/**
 * This file contains utility functions to fetch data from Sanity using GROQ queries
 */

export async function getSanityNavigationElements() {
  const cacheKey = `getSanityNavigationElements`
  const cachedSanity = sanityCache.get<SanityNavBarContent>(cacheKey)
  if (cachedSanity) {
    return cachedSanity
  }
  const sanityData = await sanityClient.fetch<SanityNavBarContent>(getNavigationElementsGroq)
  sanityCache.set(cacheKey, sanityData)

  return sanityData
}

export async function getFooterElements() {
  const cacheKey = `getFooterElements`
  const cachedSanity = sanityCache.get<SanityFooterElements[]>(cacheKey)
  if (cachedSanity) {
    return cachedSanity
  }
  const sanityData = await sanityClient.fetch<SanityFooterElements[]>(getFooterElementsGroq)
  sanityCache.set(cacheKey, sanityData)

  return sanityData
}

export async function get404PageContent() {
  const cacheKey = `get404PageContent`
  const cachedSanity = sanityCache.get<Sanity404Page>(cacheKey)
  if (cachedSanity) {
    return cachedSanity
  }
  const sanityData = await sanityClient.fetch<Sanity404Page>(getNoPageFoundGroq)
  sanityCache.set(cacheKey, sanityData)

  return sanityData
}

export async function getHomePageContent() {
  const cacheKey = `getHomePageContent`
  const cachedSanity = sanityCache.get<GenericPageProps>(cacheKey)
  if (cachedSanity) {
    return cachedSanity
  }
  const sanityData = await sanityClient.fetch<GenericPageProps>(getPagePropsGroq('home'))
  sanityCache.set(cacheKey, sanityData)

  return sanityData
}

export async function getAboutUsContent() {
  const cacheKey = `getAboutUsContent`
  const cachedSanity = sanityCache.get<GenericPageProps>(cacheKey)
  if (cachedSanity) {
    return cachedSanity
  }
  const sanityData = await sanityClient.fetch<GenericPageProps>(getPagePropsGroq('aboutUs'))
  sanityCache.set(cacheKey, sanityData)

  return sanityData
}

export async function getAccessibilityPageProps() {
  const cacheKey = `getAccessibilityPageProps`
  const cachedSanity = sanityCache.get<GenericPageProps>(cacheKey)
  if (cachedSanity) {
    return cachedSanity
  }
  const sanityData = await sanityClient.fetch<GenericPageProps>(getPagePropsGroq('accessibility'))
  sanityCache.set(cacheKey, sanityData)

  return sanityData
}

export async function getContactPageContent() {
  const cacheKey = `getContactPageContent`
  const cachedSanity = sanityCache.get<SanityContactPageContent>(cacheKey)
  if (cachedSanity) {
    return cachedSanity
  }
  const sanityData = await sanityClient.fetch<SanityContactPageContent>(getContactPageGroq)
  sanityCache.set(cacheKey, sanityData)

  return sanityData
}

export async function getJoinUsPageContent() {
  const cacheKey = `getJoinUsPageContent`
  const cachedSanity = sanityCache.get<JoinUsSanityContent>(cacheKey)
  if (cachedSanity) {
    return cachedSanity
  }
  const sanityData = await sanityClient.fetch<JoinUsSanityContent>(getJoinUsPageGroq)
  sanityCache.set(cacheKey, sanityData)

  return sanityData
}

export async function getTechInfoPageContent() {
  const cacheKey = `getTechInfoPageContent`
  const cachedSanity = sanityCache.get<TechInfoPageContent>(cacheKey)
  if (cachedSanity) {
    return cachedSanity
  }
  const sanityData = await sanityClient.fetch<TechInfoPageContent>(getTechInfoPageGroq)
  sanityCache.set(cacheKey, sanityData)

  return sanityData
}

export async function getTranslationObject(identifier: string) {
  const cacheKey = `getTranslationObject_${identifier}`
  const cachedSanity = sanityCache.get<TranslationObject>(cacheKey)
  if (cachedSanity) {
    return cachedSanity
  }
  const sanityData = await sanityClient.fetch<TranslationObject>(
    getTranslationObjectGroq(identifier)
  )
  sanityCache.set(cacheKey, sanityData)

  return sanityData
}

export async function getGuardianInfoPageContent() {
  const cacheKey = `getGuardianInfoPageContent`
  const cachedSanity = sanityCache.get<GuardianInfoPageContent>(cacheKey)
  if (cachedSanity) {
    return cachedSanity
  }
  const sanityData = await sanityClient.fetch<GuardianInfoPageContent>(getGuardianInfoPageGroq)
  sanityCache.set(cacheKey, sanityData)

  return sanityData
}

export async function getJoinFormEmailApi() {
  return await sanityClient.fetch<JoinFormEmailApi>(joinEmailFormApi)
}

export async function getPositions() {
  return await sanityClient.fetch<Position[]>(getPositionsGroq)
}
