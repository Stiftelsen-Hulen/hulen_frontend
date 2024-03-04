import { hulen_black, hulen_yellow_text } from '@/styles'
import { JoinSanitySection } from '@/types/sanity/joinUsPage'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Box, Link, Paper, Stack, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

/** Section for handling the Join Us page
 */
export const JoinUsSection = ({ content }: { content: JoinSanitySection }) => {
  const { language } = useLanguage()

  return (
    <Paper sx={{ backgroundColor: hulen_yellow_text, borderRadius: '0px', padding: '4rem' }}>
      <Stack id='join' sx={{ textAlign: 'center', alignItems: 'center', color: hulen_black }}>
        <Box
          sx={{
            width: content.icon.asset.metadata.dimensions.width ?? '100px',
            height: content.icon.asset.metadata.dimensions.height ?? '100px',
          }}
        >
          <Image
            layout='responsive'
            src={content.icon.asset.url ?? ''}
            alt={''}
            width={content.icon.asset.metadata.dimensions.width ?? 100}
            height={content.icon.asset.metadata.dimensions.height ?? 100}
          />
        </Box>
        <Typography variant='h2' sx={{ color: hulen_black, fontWeight: 700 }}>
          {content.header[language]}
        </Typography>
        <PortableText value={content.content[language]} />
        <Box display='flex'>
          <Typography sx={{ color: hulen_black }}>{content.emailPreface[language]}</Typography>
          <Link
            href={`mailto:${content.email}`}
            sx={{ color: 'white', textDecorationColor: 'white', fontStyle: 'italic' }}
          >
            {content.email}
          </Link>
        </Box>
      </Stack>
    </Paper>
  )
}
