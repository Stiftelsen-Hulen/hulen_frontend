'use client'

import { HulenPortableText } from '@/components/GenericPageContent'
import { SanityImageComponent } from '@/components/sanity'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'
import type { GuardianInfoPageContent } from '@/types/sanity/infoPages/guardianInfoPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack, Typography } from '@mui/material'

export const GuardianSection = ({ content }: { content: GuardianInfoPageContent }) => {
  const { language } = useLanguage()

  return (
    <Stack
      sx={{
        width: '100%',
        mx:'auto',
        padding: '2rem',
        maxWidth: DEFAULT_LAYOUT_MAXWIDTH,
        gap: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', alignSelf: 'start', textAlign: 'center' }}>
        <Typography variant='h1' fontWeight={700} width={'100%'}>
          {content.header[language]}
        </Typography>
        <HulenPortableText genericSanityPageProps={content.intro} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, paddingTop: '2rem' }} gap={'2.5rem'}>
          <SanityImageComponent imageData={content.guardianImage.Image} alt={content.guardianImage.altText[language]} width={500} />
          <Stack
            sx={{
              flexDirection: 'column',
              textAlign: 'left',
              '& a': { color: 'white' },
              width: '100%',
            }}
          >
            <Typography variant='h4' fontWeight={700} width={'100%'} textAlign={'center'}>
              {content.subHeading[language]}
            </Typography>
            <HulenPortableText genericSanityPageProps={content.description} />
          </Stack>
        </Box>
      </Box>
    </Stack>
  )
}
