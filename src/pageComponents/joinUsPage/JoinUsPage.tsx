'use client'

import type { JoinUsSanityContent } from '@/types/sanity/joinUsPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Button, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { scrollToSection } from '@/util/helpers'
import { BenefitsSection } from './components/sections/BenefitsSection'
import { JoinUsSection } from './components/sections/JoinUsSection'
import { PositionSection } from './components/sections/PositionSection'
import { ContentWrapper } from '@/components/layout/ContentWrapper'

/**
 * Renders the content for the join us page, inclueds:
 * Title, navigation buttons, and ingress text
 * Position section
 * Benefit section
 * Join us section
 */
export const JoinUsPageContent = ({ content }: { content: JoinUsSanityContent }) => {
  const { language } = useLanguage()

  return (
    <>
      <ContentWrapper>
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
            width: { xs: '100%', md: '50%' },
            alignSelf: 'start',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <PortableText value={content.ingress[language]} />
        </Box>
        <PositionSection content={content.positionPreface} positions={content.positions} />
        <BenefitsSection content={content.benefitsSection} />
      </ContentWrapper>

      <JoinUsSection content={content.joinSection} />
    </>
  )
}
