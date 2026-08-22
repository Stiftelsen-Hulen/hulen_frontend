'use client'

import { HulenPortableText } from '@/components/sanity'
import type { AvailabilityPageContent } from '@/types/sanity/infoPages'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Typography } from '@mui/material'

export const AvailabilitySection = ({ content }: { content: AvailabilityPageContent }) => {
  const { language } = useLanguage()
  const page = content[language] ?? content.no ?? content.en

  if (!page) {
    return null
  }

  return (
    <>
      <Typography variant='h1' fontWeight={700} width={'100%'} textAlign={'center'}>
        {page.title}
      </Typography>
      <HulenPortableText value={page.content} />
    </>
  )
}
