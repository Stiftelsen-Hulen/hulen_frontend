import { ContactPageContent } from '@/pageComponents/ContactPage'
import { getContactPageContent } from '@/util/sanity'
import { Stack } from '@mui/material'

export default async function ContactPage() {
  const data = await getContactPageContent()

  return (
    <Stack alignItems={'center'}>
      <ContactPageContent content={data} />
    </Stack>
  )
}
