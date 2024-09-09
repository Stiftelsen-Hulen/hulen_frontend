import type { SanityImage } from '@/types/sanity'
import { Box } from '@mui/material'
import Image from 'next/image'

/**
 * PositionSanityImage is a responsive image component that adapts its size based on the provided width.
 * If no width is provided, it dynamically calculates the width and height based on the aspect ratio of the image.
 * @param imageData type SanityImage
 * @param width type number, optional
 */
export const SanityImageComponent = ({
  imageData,
  width,
  alt
}: {
  imageData: SanityImage
  width?: number
  alt: string
}) => {
  function calcWidth() {
    if (width) {
      return width
    }

    return imageData.asset.metadata.dimensions.width
  }

  function calcHeight() {
    if (width) {
      return width / imageData.asset.metadata.dimensions.aspectRatio
    }

    return imageData.asset.metadata.dimensions.height
  }

  return (
    <Box width='100%' height='100%' maxWidth={`${calcWidth()}px`} maxHeight={`${calcHeight()}px`}>
      <Image
        layout='responsive'
        placeholder='blur'
        blurDataURL={imageData.asset.metadata.blurHash}
        src={imageData.asset.url ?? ''}
        alt={alt}
        width={calcWidth()}
        height={calcHeight()}
      />
    </Box>
  )
}
