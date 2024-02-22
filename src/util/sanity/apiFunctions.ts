import { SanityNavBarContent } from '@/types/sanity'
import {
  getAboutUsPageGroq,
  getContactPageGroq,
  getFooterElementsGroq,
  getHomePageGroq,
  getJoinUsPageGroq,
  getNavigationElementsGroq,
  getNoPageFoundGroq,
} from './groqQueries'
import { sanityClient } from './sanityClient'
import { SanityFooterElements } from '@/types/sanity/footerElements/footerElements'
import { Sanity404Page } from '@/types/sanity/pageNotFound'
import { GenericPageProps } from '@/types/sanity/genericPage/genericPageProps'
import { SanityContactPageContent } from '@/types/sanity/contact'
import { JoinUsSanityContent } from '@/types/sanity/joinUsPage'

export async function getSanityNavigationElements() {
  const navigationElements = await sanityClient.fetch(getNavigationElementsGroq)

  return navigationElements as SanityNavBarContent
}

export async function getFooterElements() {
  const footerElements = await sanityClient.fetch(getFooterElementsGroq)

  return footerElements as SanityFooterElements[]
}

export async function get404PageContent() {
  const noPageContent = await sanityClient.fetch(getNoPageFoundGroq)

  return noPageContent as Sanity404Page
}

export async function getHomePageContent() {
  const homePageContent = await sanityClient.fetch(getHomePageGroq)

  return homePageContent as GenericPageProps
}

export async function getAboutUsContent() {
  const aboutUsPageContent = await sanityClient.fetch(getAboutUsPageGroq)

  return aboutUsPageContent as GenericPageProps
}

export async function getContactPageContent() {
  const contactPageContent = await sanityClient.fetch(getContactPageGroq)

  return contactPageContent as SanityContactPageContent
}

export async function getJoinUsPageContent() {
  const joinUsPageContent = await sanityClient.fetch(getJoinUsPageGroq)

  return joinUsPageContent as JoinUsSanityContent
}
