'use client'

import { JoinUsSanityContent } from '@/types/sanity/joinUsPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Button, Stack, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { scrollToSection } from '@/util/helpers'
import { BenefitsSection } from './components/sections/BenefitsSection'
import { JoinUsSection } from './components/sections/JoinUsSection'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'
import { PositionSection } from './components/sections/PositionSection'

export const JoinUsPageContent = ({ content }: { content: JoinUsSanityContent }) => {
  const { language } = useLanguage()

  return (
    <Stack sx={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Stack sx={{ textAlign: 'center', alignItems: 'center', width: '100%', maxWidth: DEFAULT_LAYOUT_MAXWIDTH, justifyContent: 'center' }}>
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
        <Box sx={{ width: { xs: '100%', md: '50%' }, alignSelf: 'start', textAlign: { xs: 'center', md: 'left' } }}>
          <PortableText value={content.ingress[language]} />
        </Box>
        <PositionSection content={content.positionPreface} positions={content.positions} />
        <BenefitsSection content={content.benefitsSection} />
      </Stack>

      <JoinUsSection content={content.joinSection} />
    </Stack >
  )
}
