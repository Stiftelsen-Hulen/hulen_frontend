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
import Image from 'next/image'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'

export const JoinUsPageContent = ({ content }: { content: JoinUsSanityContent }) => {
  const { language } = useLanguage()

  return (
    <Stack justifyContent={'center'} width={'100%'}>
      <Stack sx={{ textAlign: 'center', alignItems: 'center', width: '100%', maxWidth: DEFAULT_LAYOUT_MAXWIDTH }}>
        <Typography variant='h1' fontWeight={700} width={'100%'}>
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
          {content.navigationButtons.map((buttonProps) => (
            <Button
              key={buttonProps.section}
              variant='linkButton'
              onClick={() => scrollToSection(buttonProps.section)}
            >
              {buttonProps.label[language]}
            </Button>
          ))
          }

        </Box>
        <Box width={{ xs: '100%', md: '50%' }} alignSelf={'start'} textAlign={{ xs: 'center', md: 'left' }}>
          <PortableText value={content.ingress[language]} />
        </Box>

        <Stack justifyContent={'center'}>
          <Box
            sx={{
              width: content.positionPreface.descImage.asset.metadata.dimensions.width ?? '6.25rem',
              height: content.positionPreface.descImage.asset.metadata.dimensions.height ?? '6.25rem',
            }}
          >
            <Image
              layout='responsive'
              src={content.positionPreface.descImage.asset.url ?? ''}
              alt={''}
              width={content.positionPreface.descImage.asset.metadata.dimensions.width ?? '6.25rem'}
              height={content.positionPreface.descImage.asset.metadata.dimensions.height ?? '6.25rem'}
            />
          </Box>
        </Stack>

        <PositionButtons positions={content.positions} introductoryText={content.positionPreface} />
        <Stack gap='2rem' margin='2rem 0rem' id='positions' width={'100%'}>
          {content.positions.map((position, index) => (
            <PositionEntry position={position} key={index} />
          ))}
        </Stack>
        <BenefitsSection content={content.benefitsSection} />

      </Stack>
      <JoinUsSection content={content.joinSection} />
    </Stack>
  )
}
