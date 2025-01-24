import { SanityImageComponent } from '@/components/sanity'
import type { Position } from '@/types/sanity/joinUsPage/position'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'

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
        <Typography
          variant='h3'
          sx={{ wordWrap: 'break-word', width: '100%', textAlign: 'center' }}
        >
          {position.title[language]}
        </Typography>
        <Stack sx={{ textAlign: 'justify sm:left', width: '100%' }}>
          <PortableText value={position.description[language]} />
        </Stack>
      </Stack>
      {image && (
        <SanityImageComponent imageData={image} width={368} alt={image.altText?.[language] ?? ''} />
      )}
    </Box>
  )
}
