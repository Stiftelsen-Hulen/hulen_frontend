import { supportedLanguages } from '@/configs'

export const getNavigationElementsGroq = `*[_type == "navBarProps"][0] {navElements[]{subUrl, title{${supportedLanguages.join(
  ','
)}}}, navbarLogo{ asset->{
  url,
},
altText{
  ${supportedLanguages.join(',')}
} }}`

//altText{${supportedLanguages.join(',')}}, "imageUrl": navbarLogo.asset->url}
