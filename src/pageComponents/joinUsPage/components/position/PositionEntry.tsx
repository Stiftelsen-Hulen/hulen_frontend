import { SanityImage } from '@/types/sanity'
import { Position } from '@/types/sanity/joinUsPage/position'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'


/**
 * Posistion entry is for details of a posistion eg. "Bartender"
 * If an image is included in Sanity, it will be displayed; otherwise, no image will be shown.
 * @param position type Position
 */
export const PositionEntry = ({ position }: { position: Position }) => {
  const { language } = useLanguage()

  const image = position.descImage

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: '1rem', md: '4rem' },
        justifyContent: { xs: 'default', md: 'space-between' },
        alignItems: { xs: 'center', md: 'default' },
      }}
      id={`${position.title[language]}`}
    >
      <Stack sx={{ justifyContent: 'center', maxWidth: { xs: '100%', md: '60%' }, width: '100%' }}>
        <Typography variant='h3' sx={{ wordWrap: 'break-word', width: '100%', textAlign: 'center' }} >
          {position.title[language]}
        </Typography>
        <Stack sx={{ textAlign: 'justify', width: '100%' }}>
          <PortableText value={position.description[language]} />
        </Stack>
      </Stack>
      {image && <PositionSanityImage imageData={image} width={368} />}
    </Box>
  )
}

/**
 * PositionSanityImage is a responsive image component that adapts its size based on the provided width.
 * If no width is provided, it dynamically calculates the width and height based on the aspect ratio of the image.
 * @param imageData type SanityImage
 * @param width type number, optional
 */
const PositionSanityImage = ({ imageData, width }: { imageData: SanityImage; width?: number }) => {
  const calcWidth = () => {
    if (width) {
      return width
    }

    return imageData.asset.metadata.dimensions.width
  }

  const calcHeight = () => {
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
        alt={'todo'}
        width={calcWidth()}
        height={calcHeight()}
      />
    </Box>
  )
}
