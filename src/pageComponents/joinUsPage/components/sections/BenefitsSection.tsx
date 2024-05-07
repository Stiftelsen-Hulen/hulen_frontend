import { BenefitsSectionContent } from '@/types/sanity/joinUsPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

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
        <Box
          sx={{
            width: content.descImage.asset.metadata.dimensions.width ?? '6.25rem',
            height: content.descImage.asset.metadata.dimensions.height ?? '6.25rem',
          }}
        >
          <Image
            layout='responsive'
            src={content.descImage.asset.url ?? ''}
            alt={''}
            width={content.descImage.asset.metadata.dimensions.width ?? 100}
            height={content.descImage.asset.metadata.dimensions.height ?? 100}
          />
        </Box>
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
