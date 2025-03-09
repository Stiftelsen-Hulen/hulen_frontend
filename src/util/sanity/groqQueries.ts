import { supportedLanguages } from '@/configs'
const languageOptions = supportedLanguages.join(',')

/**
 * What's this?
 * Sanity stores data in a so-called "lake". It's basically a json store, where you can put documents (expressed as objects).
 * The sanity client here uses GROQ  queries to access this data. (There are other ways to get the data too, ref: https://www.sanity.io/docs/datastore).
 * The queries filter the documents (objects), based on attributes and values.
 * Example value filtering: *[attributename == "somevalue"]
 * Example key filtering: *{ giveMeObjectsWithThisKey}
 * The query language returns only what you ask for. You can ask for all, or specific parts of the objects (with curly brace accessing syntax).
 * Check this out for detailed explanation about queries: https://www.sanity.io/docs/how-queries-work
 * Cheat sheet: https://www.sanity.io/docs/query-cheat-sheet
 *  */

export const getNavigationElementsGroq = `*[_type == "navBarProps"][0] {navElements[]{subUrl, title{${languageOptions}}, subNavElements[]{subUrl, title{${languageOptions}}}}, navbarLogo{ asset->{
  url,metadata
},
altText{
  ${supportedLanguages.join(',')}
} }}`

export const getNoPageFoundGroq = `*[_type == "notFoundPage"][0] {infotext{${languageOptions}},backbuttonlabel{${languageOptions}},
notFoundImage{
asset -> {url, metadata},
altText{${languageOptions}}
}}`

export const getFooterElementsGroq = `*[_type == "footerElements"] | order(sortOrder) {sortOrder, footerElement{${supportedLanguages
  .map((language) => `${language}[]{..., Image{asset ->  {url, metadata}}}`)
  .join(',')}}}`

export const getHomePageGroq = `*[_type == "pageProps" && title =="home"][0] { ..., locale{${supportedLanguages
  .map((language) => `${language}[]{..., Image{asset ->  {url, metadata}}}`)
  .join(',')} }}`

export const getAboutUsPageGroq = `*[_type == "pageProps" && title =="aboutUs"][0] { ..., locale{${supportedLanguages
  .map((language) => `${language}[]{..., Image{asset ->  {url, metadata}}}`)
  .join(',')} }}`

export const getContactPageGroq = `*[_type == "contactPage"][0] {contactList[]{name, title, phone, email, title{${languageOptions}}}, booking{title{${languageOptions}}, email}, headerInfoBlock{${languageOptions}}}`

export const getJoinUsPageGroq = `*[_type == "joinUsPage"][0] {
  benefitsSection{
    content{${languageOptions}}, 
    header{${languageOptions}}, 
    descImage{
      asset -> {url, metadata}
    }, 
  },
  ingress{ ${languageOptions} },
  joinSection{
    content{${languageOptions}},
    email,
    emailPreface{${languageOptions}},
    header{${languageOptions}},
    icon{
      asset -> {url, metadata}
    }, 
  },
  positionPreface{
    header{${languageOptions}},
    content{${languageOptions}},
    descImage{
      asset -> {url, metadata}
    }, 
  },
  navigationButtons[]{label{${languageOptions}},section },
  pageTitle{${languageOptions}},
  positions[]{
    title{${languageOptions}},
    category,
    description{${languageOptions}},
    descImage{
      asset -> {url, metadata},
      altText{${languageOptions}}
    }
  },
  joinEmailForm {
    relevantInfoFormLabel{${languageOptions}},
    nameFormLabel{${languageOptions}},
    ageFormLabel{${languageOptions}},
    emailFormLabel{${languageOptions}},
    emailFormTitle{${languageOptions}},
    jobFormLabel{${languageOptions}},
  }
}`

export const getPositionsGroq = `*[_type == "joinUsPage"][0] {
 positions[]{ 
    title{${languageOptions}},
    category,
    description{${languageOptions}},
    descImage{
      asset -> {url, metadata},
      altText{${languageOptions}}
}}}`

export const joinEmailFormApi = `{ "positionsWrapper": *[_type == "joinUsPage"][0] {
   positions[]{ 
      title{no}}
      },
  "emailForm": *[_type == "joinEmailFormApiResponse"][0] {
    emailResponseStatus {
      success{no},
      error{no}
      }
  }}`

export const getTechInfoPageGroq = `*[_type == "techInfo"][0]{
  categories[]{
    entries[],
    category,
  },
  email,
  emailDescription{${languageOptions}},
  header{${languageOptions}},
}`

export function getTranslationObjectGroq(identifier: string) {
  return `*[_type == "translationObject" && identifier == "${identifier}"][0]{identifier,content{${languageOptions}}}`
}

export const getGuardianInfoPageGroq = `*[_type == "guardianInfo"][0]{
  header{${languageOptions}},
  intro{${languageOptions}},
  subHeading{${languageOptions}},
  description{${languageOptions}},
  guardianImage{
    asset -> {url, metadata},
    altText{${languageOptions}}
  }
}`

export function getPagePropsGroq(title: string) {
  return `*[_type == "pageProps" && title == "${title}"][0] { ..., locale{${supportedLanguages
    .map((language) => `${language}[]{..., Image{asset -> {url, metadata}}}`)
    .join(',')} }}`
}
