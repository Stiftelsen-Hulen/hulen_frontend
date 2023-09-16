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

export const getFooterElementsGroq = `*[_type == "footerElements"] {sortOrder, footerElement{${languageOptions}}}`
//altText{${supportedLanguages.join(',')}}, "imageUrl": navbarLogo.asset->url}
