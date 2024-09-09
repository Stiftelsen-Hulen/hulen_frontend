import { LanguageOptions } from "../language"

export interface SanityImage {
  asset: {
    url: string
    metadata: {
      blurHash: string
      dimensions: {
        width: number
        height: number
        aspectRatio: number
      }
      hasAlpha: boolean
      isOpaque: boolean
      lqip: string
    }
  }
}

export interface LocaleImage {
  Image: SanityImage
  altText: string
  linkUrl: string
}

export interface SanityImageWithLocaleAlt {
  altText: Record<LanguageOptions, string>
  Image: SanityImage
}
