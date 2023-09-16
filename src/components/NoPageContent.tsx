'use client'
import { hulen_black, hulen_yellow_text } from '@/styles'
import { Sanity404Page } from '@/types/sanity/pageNotFound'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'

const TypographyAsButton = styled(Typography)({
  backgroundColor: hulen_yellow_text,
  color: hulen_black,
  padding: '4px 8px',
  borderRadius: '4px',
  fontWeight: 'bold',
})

export const Page404Content = ({ notFoundImage, infotext, backbuttonlabel }: Sanity404Page) => {
  const { language } = useLanguage()

  return (
    <Stack alignItems={'center'} gap='2rem'>
      <Image
        src={notFoundImage.asset.url}
        width={360}
        height={360}
        alt={notFoundImage.altText[language]}
      />
      <Typography textAlign={'center'}>{infotext[language]}</Typography>
      <Link href='/' style={{ all: 'unset', cursor: 'pointer' }}>
        <TypographyAsButton sx={{}}>{backbuttonlabel[language]}</TypographyAsButton>
      </Link>
    </Stack>
  )
}
