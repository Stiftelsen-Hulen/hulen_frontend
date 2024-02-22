'use client'

import { JoinUsSanityContent } from '@/types/sanity/joinUsPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Button, Stack, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { scrollToSection } from '@/util/helpers'
import { PositionButtons } from './components/position/PositionButtons'
import { PositionEntry } from './components/position/PositionEntry'
import { BenefitsSection } from './components/sections/BenefitsSection'
import { JoinUsSection } from './components/sections/JoinUsSection'

export const JoinUsPageContent = ({ content }: { content: JoinUsSanityContent }) => {
  const { language } = useLanguage()

  return (
    <Box display='flex' justifyContent={'center'} width={'100%'}>
      <Stack maxWidth={'1040px'} textAlign={'center'} alignItems={'center'}>
        <Typography variant='h2' fontWeight={700}>
          {content.pageTitle[language]}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            width: '100%',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
          display='flex'
          justifyContent={'space-between'}
          gap='1rem'
          width='100%'
        >
          {
            //TODO: Sanity translate
          }
          <Button variant='linkButton' onClick={() => scrollToSection('positions')}>
            Stillinger
          </Button>
          <Button variant='linkButton' onClick={() => scrollToSection('benefits')}>
            Fordeler
          </Button>
          <Button variant='linkButton' onClick={() => scrollToSection('join')}>
            Bli med
          </Button>
        </Box>
        <Stack>
          <PortableText value={content.field[language]} />
        </Stack>

        <PositionButtons positions={content.positions} />
        <Stack gap='2rem' margin='2rem 0rem' id='positions'>
          {content.positions.map((position, index) => (
            <PositionEntry position={position} key={index} />
          ))}
        </Stack>
        <BenefitsSection content={content.benefitsSection} />
        <JoinUsSection content={content.joinSection} />
      </Stack>
    </Box>
  )
}
