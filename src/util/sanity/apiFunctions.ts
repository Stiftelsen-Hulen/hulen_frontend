import { SanityNavBarContent } from '@/types/sanity'
import { getNavigationElementsGroq } from './groqQueries'
import { sanityClient } from './sanityClient'

export async function getSanityNavigationElements() {
  const navigationElements = await sanityClient.fetch(getNavigationElementsGroq)

  return navigationElements as SanityNavBarContent
}
