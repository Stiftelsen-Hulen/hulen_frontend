'use client'
import { hulen_yellow_text } from '@/styles'
import { ContactInfo, SanityContactPageContent } from '@/types/sanity/contact'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Grid, Stack, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'

export const ContactPageContent = ({ content }: { content: SanityContactPageContent }) => {
  const { language } = useLanguage()
  console.log(content)

  return (
    <Stack>
      <Stack alignItems={'center'} gap='1rem' sx={{ '&>*': { margin: 0, textAlign: 'center' } }}>
        <PortableText value={content.headerInfoBlock[language]} />
        <Stack alignItems={'center'}>
          <Typography variant='overline'>{content.booking.title[language]}</Typography>
          <Typography
            component={'a'}
            href={`mailto:${content.booking.email}`}
            sx={{ color: 'white', textDecorationColor: hulen_yellow_text }}
          >
            {content.booking.email}
          </Typography>
        </Stack>
      </Stack>
      <Grid container spacing={'1.5rem'} marginTop='1rem'>
        {content.contactList.map((contactInfo, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ContactCard contactInfo={contactInfo} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

const ContactCard = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  const { language } = useLanguage()

  return (
    <Stack alignItems={'center'}>
      <Typography variant='overline'>{contactInfo.title[language]}</Typography>
      <Typography sx={{ fontWeight: 500 }}>{contactInfo.name}</Typography>
      <Typography
        component={'a'}
        href={`mailto:${contactInfo.email}`}
        sx={{ color: 'white', textDecorationColor: hulen_yellow_text }}
      >
        {contactInfo.email}
      </Typography>
      <Typography>{contactInfo.phone}</Typography>
    </Stack>
  )
}
