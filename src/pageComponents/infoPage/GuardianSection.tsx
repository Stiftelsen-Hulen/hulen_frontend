'use client'

import { DEFAULT_LAYOUT_MAXWIDTH } from "@/configs/constants"
import { GuardianInfoPageContent } from "@/types/sanity/infoPages/guardianInfoPage"
import { useLanguage } from "@/util/LanguageContext/LanguageContext"
import { Box, Stack, Typography } from '@mui/material'
import { PortableText } from "@portabletext/react"
import Image from 'next/image'

export const GuardianSection = ({ content }: { content: GuardianInfoPageContent }) => {
  const { language } = useLanguage()
  return (
    <Stack sx={{ alignItems: 'center', padding: '2rem', width: '100%' }}>
      <Stack
        sx={{
          width: '100%',
          maxWidth: DEFAULT_LAYOUT_MAXWIDTH,
          gap: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack>
          <Box sx={{ width: '100%', alignSelf: 'start', textAlign: 'center' }}>
            <Typography variant='h1' fontWeight={700} width={'100%'}>
              {content.header[language]}
            </Typography>
            <PortableText value={content.intro[language]} />
            <Typography variant='h4' fontWeight={700} width={'100%'}>
              {content.subHeading[language]}
            </Typography>
            <Stack sx={{ flexDirection: "row" }}>
              <Image
                src={content.guardianImage.asset.url ?? ''}
                alt={''}
                width={500}
                height={600}
              />
              <Stack sx={{ flexDirection: "column", textAlign: "left" }}>
                <PortableText value={content.description[language]} />
              </Stack>
            </Stack>
          </Box>
        </Stack >
      </Stack >
    </Stack >
  )
}
