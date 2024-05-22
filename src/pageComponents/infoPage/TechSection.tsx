'use client'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'
import { hulen_yellow_text } from '@/styles/theme'
import { TechInfoPageContent } from '@/types/sanity/infoPages/techInfoPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Stack, Typography } from '@mui/material'


export const TechSection = ({ content }: { content: TechInfoPageContent }) => {
  const { language } = useLanguage()
  return (
    <Stack sx={{ alignItems: 'center', padding: '2rem', width: '100%' }}>
      <Stack sx={{ width: '100%', maxWidth: DEFAULT_LAYOUT_MAXWIDTH, gap: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Stack>
          <Box sx={{ width: '100%', alignSelf: 'start', textAlign: 'center' }}>
            <Typography variant='h1' fontWeight={700} width={'100%'}>
              {content.header[language]}
            </Typography>
            <Typography variant='body1'> {content.emailDescription[language]}</Typography>
            <Typography
              component={'a'}
              href={`mailto:${content.email}`}
              sx={{ color: 'white', textDecorationColor: hulen_yellow_text }}
            >
              {content.email}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )

}
