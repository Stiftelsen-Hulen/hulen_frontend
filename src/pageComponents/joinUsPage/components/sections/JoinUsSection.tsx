import { SanityImageComponent } from '@/components/sanity'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs'
import { hulen_black, hulen_yellow_text } from '@/styles'
import type { JoinSanitySection } from '@/types/sanity/joinUsPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Link, Paper, Stack, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'

/**
 * Section on the Join Us page
 */
export const JoinUsSection = ({ content }: { content: JoinSanitySection }) => {
  const { language } = useLanguage()

  return (
    <Paper
      sx={{
        backgroundColor: hulen_yellow_text,
        borderRadius: '0rem',
        padding: '4rem',
        width: 'calc(100% + 4rem)',
        position: 'relative',
        left: '-2rem',
        maxWidth: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack
        id='join'
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          color: hulen_black,
          width: '100%',
          maxWidth: DEFAULT_LAYOUT_MAXWIDTH,
        }}
      >
        <SanityImageComponent
          imageData={content.icon}
          alt=''
          sx={{
            width: '10vw',
            maxWidth: '100%',
            height: 'auto',
          }} />
        <Typography variant='h2' sx={{ color: hulen_black, fontWeight: 700 }}>
          {content.header[language]}
        </Typography>
        <PortableText value={content.content[language]} />
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          <Typography sx={{ color: hulen_black }}>{content.emailPreface[language]}</Typography>
          <Link
            href={`mailto:${content.email}`}
            sx={{ color: '#5b5b5b', textDecorationColor: '#5b5b5b', fontStyle: 'italic' }}
          >
            {content.email}
          </Link>
        </Box>
      </Stack>
    </Paper>
  )
}
