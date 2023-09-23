import { supportedLanguages } from '@/configs'
const languageOptions = supportedLanguages.join(',')

export const getNavigationElementsGroq = `*[_type == "navBarProps"][0] {navElements[]{subUrl, title{${languageOptions}}}, navbarLogo{ asset->{
  url,
},
altText{
  ${supportedLanguages.join(',')}
} }}`

export const getNoPageFoundGroq = `*[_type == "notFoundPage"][0] {infotext{${languageOptions}},backbuttonlabel{${languageOptions}}, notFoundImage{ asset->{
  url,
},
altText{
  ${supportedLanguages.join(',')}
} }}`

export const getFooterElementsGroq = `*[_type == "footerElements"] | order(sortOrder) {sortOrder, footerElement{${languageOptions}}}`

export const getHomePageGroq = `*[_type == "pageProps" && title =="home"][0] { ..., locale{${supportedLanguages
  .map((language) => `${language}[]{..., Image{asset ->  {url, metadata}}}`)
  .join(',')} }}`
