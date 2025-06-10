'use client'

import type { JoinUsSanityContent } from '@/types/sanity/joinUsPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Button, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { scrollToSection } from '@/util/helpers'
import {
  PositionSection,
  BenefitsSection,
  JoinUsSection,
  JoinEmailForm,
} from './components/sections'

/**
 * Renders the content for the join us page, includes:
 * Title, navigation buttons, and ingress text
 * Position section
 * Benefit section
 * Join us section
 */
export const JoinUsPageContent = ({ content }: { content: JoinUsSanityContent }) => {
  const { language } = useLanguage()

  return (
    <>
      <JoinUsSection content={content.joinSection} />
      <Box>
        <Typography variant='h1' fontWeight={700} width={'100%'} textAlign={'center'}>
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
        >
          {content.navigationButtons.map((buttonProps) => (
            <Button
              key={buttonProps.section}
              variant='linkButton'
              onClick={() => scrollToSection(buttonProps.section)}
            >
              {buttonProps.label[language]}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            width: '100%',
            alignSelf: 'start',
            textAlign: { xs: 'left', md: 'center' },
          }}
        >
          <PortableText value={content.ingress[language]} />
        </Box>
      </Box>
      <JoinEmailForm content={content.joinEmailForm} positions={content.positions} />
      <PositionSection content={content.positionPreface} positions={content.positions} />
      <BenefitsSection content={content.benefitsSection} />
      <JoinUsSection content={content.joinSection} />
    </>
  )
}
