'use client'
import { SanityImageComponent } from '@/components/sanity'
import { hulen_black, hulen_yellow_text } from '@/styles'
import type { Sanity404Page } from '@/types/sanity/pageNotFound'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'
import Link from 'next/link'

const TypographyAsButton = styled(Typography)({
  backgroundColor: hulen_yellow_text,
  color: hulen_black,
  padding: '0.25rem 0.5rem',
  borderRadius: '0.25rem',
  fontWeight: 'bold',
})

export const NotFoundPageContent = ({
  notFoundImage,
  infotext,
  backbuttonlabel,
}: Sanity404Page) => {
  const { language } = useLanguage()

  return (
    <Stack alignItems={'center'} gap='2rem'>
      <SanityImageComponent
        imageData={notFoundImage}
        width={360}
        alt={notFoundImage.altText[language]}
      />
      <Typography textAlign={'center'}>{infotext[language]}</Typography>
      <Link href='/' style={{ all: 'unset', cursor: 'pointer' }}>
        <TypographyAsButton>{backbuttonlabel[language]}</TypographyAsButton>
      </Link>
    </Stack>
  )
}
