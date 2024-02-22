import { BenefitsSectionContent } from '@/types/sanity/joinUsPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'

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
      <Box sx={{ maxWidth: { xs: '100%', md: '50%' } }}>
        <Typography variant='h4' fontWeight={700} textAlign={'center'}>
          {content.header[language]}
        </Typography>
      </Box>
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
