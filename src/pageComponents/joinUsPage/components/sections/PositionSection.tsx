import { useState, useRef } from 'react'
import type { Position } from '@/types/sanity/joinUsPage/position'
import type { PositionDescriptionSection } from '@/types/sanity/joinUsPage'
import { Stack, Typography, Box } from '@mui/material'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { PortableText } from '@portabletext/react'
import { PositionButtons, PositionEntry } from '../position'
import { SanityImageComponent } from '@/components/sanity'

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
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % positions.length)
    scrollToPosition(activeIndex + 1)
  }

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + positions.length) % positions.length)
    scrollToPosition(activeIndex - 1)
  }

  const scrollToPosition = (index: number) => {
    if (carouselRef.current) {
      const positionElement = carouselRef.current.children[index] as HTMLElement
      positionElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }
  }

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

      {window.innerWidth > 700 ? (
        <PositionButtons positions={positions} />
      ) : (
        <div
          className='positionLinks'
          style={{
            width: window.innerWidth < 700 ? '90%' : '66%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {positions.map((position, index) => (
            <a
              onClick={() => scrollToPosition(index)}
              key={index}
              style={{
                cursor: 'pointer',
                margin: '0px 3.33px',
                display: 'inline-block',
                transition: 'background-color 0.6s',
                textDecoration: 'underline',
              }}
            >
              {position.title[language]}
            </a>
          ))}
        </div>
      )}

      <Box
        sx={{
          display: 'flex',
          gap: '2rem',
          margin: '2rem 0rem',
          width: '100%',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          '& > *': {
            scrollSnapAlign: 'start',
            flex: '0 0 auto',
          },
        }}
        ref={carouselRef}
      >
        {positions.map((position, index) => (
          <Box key={index} sx={{ width: '100%', maxWidth: '100%' }}>
            <PositionEntry position={position} />
          </Box>
        ))}
      </Box>
    </Stack>
  )
}
