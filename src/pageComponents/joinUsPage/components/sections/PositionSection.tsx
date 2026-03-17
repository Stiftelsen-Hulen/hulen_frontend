import type { Position } from '@/types/sanity/joinUsPage/position'
import type { PositionDescriptionSection } from '@/types/sanity/joinUsPage'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from '@mui/material'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { PortableText } from '@portabletext/react'
import { SanityImageComponent } from '@/components/sanity'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { hulen_black, hulen_yellow } from '@/styles'
import React from 'react'

const Dayshift = 'outside_regular'
const Nightshift = 'night_shift'

const MaxWidth = 800
const MaxHeight = 550

function GetMaxWidth(position: Position) {
  return Math.min(
    // max width, picture width, or width calculated from maxheight and aspect ratio
    MaxWidth,
    position.descImage.asset.metadata.dimensions.width,
    MaxHeight * position.descImage.asset.metadata.dimensions.aspectRatio
  )
}

function GetMaxHeight(position: Position) {
  return Math.min(
    // max height, picture height, or height calculated from maxwidth and aspect ratio
    MaxHeight,
    position.descImage.asset.metadata.dimensions.height,
    MaxWidth / position.descImage.asset.metadata.dimensions.aspectRatio
  )
}

function PositionEntry(position: Position) {
  const { language } = useLanguage()
  const image = position.descImage

  return (
    <Accordion
      sx={{
        borderRadius: '0px !important',
        borderWidth: '0.5px',
        backgroundColor: hulen_black,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color='secondary' />}
        aria-controls='panel2-content'
        id='panel2-header'
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        {position.title[language]}
        <Typography
          variant='body1'
          sx={{
            display: window.innerWidth >= 900 ? 'block' : 'none',
            textAlign: 'right',
            marginLeft: 'auto',
            marginRight: '10px',
          }}
        >
          {position.onelinerDescription && window.innerWidth >= 900
            ? `        ${position.onelinerDescription[language]}`
            : ''}
        </Typography>
      </AccordionSummary>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'inherit' },
          justifyContent: 'space-between',
          backgroundColor: hulen_black,
          marginBottom: '10px',
        }}
      >
        <AccordionDetails>
          <PortableText value={position.description[language]} />
        </AccordionDetails>
        {image && (
          <SanityImageComponent
            imageData={image}
            alt={image.altText?.[language] ?? ''}
            width={window.innerWidth < 900 ? 0 : GetMaxWidth(position)}
            sx={{
              paddingX: { xs: '16px', md: 'inherit' }, // space between the border and picture for smaller viewports. Same as in padding as AccordionDetails text-content
              minWidth: window.innerWidth < 900 ? 0 : 352,
              maxHeight: GetMaxHeight(position),
              maxWidth: GetMaxWidth(position),
            }}
          />
        )}
      </Box>
    </Accordion>
  )
}

/**
 * Section for positions on join us page, includes:
 * Introduction
 * Position Buttons
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
              xl: '250px',
            },
            height: 'auto',
            minWidth: '100px',
            maxWidth: '300px',
          }}
        />
        <Typography variant='h3'>{content.header[language]}</Typography>
        <PortableText value={content.content[language]} />
      </Stack>

      <Typography variant='h4'>
        {language == 'no' ? 'Dagtidsstillinger' : 'Daytime Positions'}
      </Typography>

      <Box
        sx={{
          borderWidth: '1px',
          borderLeftWidth: '1px',
          borderRightWidth: '1px',
          BorderColor: hulen_yellow,
          borderStyle: 'solid',
        }}
      >
        {positions.map((pos) => pos.category === Dayshift && PositionEntry(pos))}
      </Box>

      <Typography variant='h4'>
        {language == 'no' ? 'Kveldsstillinger' : 'Night Time Positions'}
      </Typography>
      <Box
        sx={{
          borderWidth: '1px',
          borderLeftWidth: '1px',
          borderRightWidth: '1px',
          BorderColor: hulen_yellow,
          borderStyle: 'solid',
        }}
      >
        {positions.map((pos) => pos.category === Nightshift && PositionEntry(pos))}
      </Box>
    </Stack>
  )
}
