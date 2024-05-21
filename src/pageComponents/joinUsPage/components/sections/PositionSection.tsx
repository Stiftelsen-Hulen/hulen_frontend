import { Position } from '@/types/sanity/joinUsPage/position'
import { PositionDescriptionSection } from '@/types/sanity/joinUsPage'
import { Box, Stack, Typography } from '@mui/material'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { PortableText } from '@portabletext/react'
import { PositionButtons } from '../position/PositionButtons'
import { PositionEntry } from '../position/PositionEntry'
import Image from 'next/image'

/**
 * Section for positions on join us page, includes:
 * Introduction
 * Postition Buttons
 * Position entries
 */
export const PositionSection = ({ content, positions }: { content: PositionDescriptionSection, positions: Position[] }) => {
  const { language } = useLanguage()

  return (
    <Stack sx={{ alignItems: 'center', gap: '2rem', width: '100%' }}>
      <Stack sx={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Box
          sx={{
            width: content.descImage.asset.metadata.dimensions.width ?? '6.25rem',
            height: content.descImage.asset.metadata.dimensions.height ?? '6.25rem',
          }}
        >
          <Image
            layout='responsive'
            src={content.descImage.asset.url ?? ''}
            alt={''}
            width={content.descImage.asset.metadata.dimensions.width ?? '6.25rem'}
            height={content.descImage.asset.metadata.dimensions.height ?? '6.25rem'}
          />
        </Box>
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
