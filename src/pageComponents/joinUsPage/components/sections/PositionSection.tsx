import type { Position } from '@/types/sanity/joinUsPage/position'
import type { PositionDescriptionSection } from '@/types/sanity/joinUsPage'
import { Stack, Typography } from '@mui/material'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { PortableText } from '@portabletext/react'
import { PositionButtons, PositionEntry } from '../position'
import { SanityImageComponent } from '@/components/sanity'

/**
 * Section for positions on join us page, includes:
 * Introduction
 * Postition Buttons
 * Position entries
 */
export const PositionSection = ({
  content,
  positions,
}: {
  content: PositionDescriptionSection
  positions: Position[]
}) => {
  const { language } = useLanguage()

  return (
    <Stack sx={{ alignItems: 'center', gap: '2rem', width: '100%' }} id='positions'>
      <Stack sx={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <SanityImageComponent
          imageData={content.descImage}
          alt={''}
          sx={{
            width: {
              xs: '100px',
              sm: '20vw',
              md: '15vw',
              lg: '200px',
              xl: '250px'
            },
            height: 'auto',
            minWidth: '100px',
            maxWidth: '300px',
          }}
        />
        <Typography variant='h3'>{content.header[language]}</Typography>
        <PortableText value={content.content[language]} />
      </Stack>

      <PositionButtons positions={positions} />

      <Stack sx={{ gap: '2rem', margin: '2rem 0rem', width: '100%' }}>
        {positions.map((position, index) => (
          <PositionEntry position={position} key={index} />
        ))}
      </Stack>
    </Stack>
  )
}
