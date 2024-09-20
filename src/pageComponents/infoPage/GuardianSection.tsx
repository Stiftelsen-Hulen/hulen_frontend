'use client'

import { HulenPortableText, SanityImageComponent } from '@/components/sanity'
import type { GuardianInfoPageContent } from '@/types/sanity/infoPages/guardianInfoPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack, Typography } from '@mui/material'

/**
 * Renders the content for the Guardian Info page, includes:
 * Title, ingress
 * Guardian content
 */
export const GuardianSection = ({ content }: { content: GuardianInfoPageContent }) => {
  const { language } = useLanguage()

  return (
    <>
      <Typography variant='h1' fontWeight={700} width={'100%'} textAlign={'center'}>
        {content.header[language]}
      </Typography>
      <HulenPortableText genericSanityPageProps={content.intro} />

      <Box
        sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, paddingTop: '2rem' }}
        gap={'2.5rem'}
      >
        <SanityImageComponent
          imageData={content.guardianImage}
          alt={content.guardianImage.altText[language]}
          width={500}
        />
        <Stack sx={{ width: '100%' }}>
          <Typography variant='h4' fontWeight={700} width={'100%'} textAlign={'center'}>
            {content.subHeading[language]}
          </Typography>
          <HulenPortableText genericSanityPageProps={content.description} />
        </Stack>
      </Box>
    </>
  )
}
