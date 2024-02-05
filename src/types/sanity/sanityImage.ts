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
