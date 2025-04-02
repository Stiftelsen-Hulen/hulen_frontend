import type { SanityImage } from '@/types/sanity'
import { Box, SxProps } from '@mui/material'
import Image from 'next/image'

interface SanityImageComponentProps {
  imageData: SanityImage
  width?: number
  alt: string
  sx?: SxProps
}

export const SanityImageComponent = ({
  imageData,
  width,
  alt,
  sx,
}: SanityImageComponentProps) => {
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
    <Box
      sx={{
        width: '100%',
        height: '100%',
        maxWidth: `${calcWidth()}px`,
        maxHeight: `${calcHeight()}px`,
        ...sx, // Merge custom sx props
      }}
    >
      <Image
        placeholder='blur'
        blurDataURL={imageData.asset.metadata.blurHash}
        src={imageData.asset.url ?? ''}
        alt={alt}
        width={calcWidth()}
        height={calcHeight()}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </Box>
  )
}