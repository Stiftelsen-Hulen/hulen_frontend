import type { ContactInfo } from '@/types/sanity/contact'
import { useLanguage } from '@/util/LanguageContext/LanguageContext'
import { Stack, Typography } from '@mui/material'

/**
 * A contact card is intented for displaying a contact entry in the contact page
 */
export const ContactCard = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  const { language } = useLanguage()

  return (
    <Stack alignItems={'center'} textAlign={'center'}>
      <Typography variant='overline'>{contactInfo.title[language]}</Typography>
      <Typography sx={{ fontWeight: 500 }}>{contactInfo.name}</Typography>
      <Typography component={'a'} href={`mailto:${contactInfo.email}`} variant='link'>
        {contactInfo.email}
      </Typography>
      <Typography>{contactInfo.phone}</Typography>
    </Stack>
  )
}
