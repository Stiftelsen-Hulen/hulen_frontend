import { SanityImageComponent } from '@/components/sanity'
import type { BenefitsSectionContent } from '@/types/sanity/joinUsPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
/**
 * The layout for the benefit section on the Join us Page
 * @param param0
 * @returns
 */
export const BenefitsSection = ({ content }: { content: BenefitsSectionContent }) => {
  const { language } = useLanguage()

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '4rem',
        width: '100%',
        flexDirection: { xs: 'column', md: 'row' },
      }}
      id='benefits'
    >
      <Stack sx={{ maxWidth: { xs: '100%', md: '50%' }, alignItems: 'center', gap: '2rem' }}>
        <SanityImageComponent
          imageData={content.descImage}
          alt=''
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
        <Typography variant='h4' fontWeight={700} textAlign={'center'}>
          {content.header[language]}
        </Typography>
      </Stack>
      <Stack
        sx={{
          maxWidth: { xs: '100%', md: '50%' },
          'p, h1, h2, h3, h4, h5': { textAlign: 'center' },
          li: { textAlign: 'initial' },
        }}
      >
        <PortableText value={content.content[language]} />
      </Stack>
    </Box>
  )
}
