import { TechSection } from '@/pageComponents/infoPage/TechSection'
import type { TechInfoPageContent } from '@/types/sanity/infoPages/techInfoPage'
import { getTechInfoPageContent } from '@/util/sanity/apiFunctions'
import { Stack } from '@mui/material'

export default async function InfoPage() {
  const data: TechInfoPageContent = await getTechInfoPageContent()
  console.log('Data infopage: ', data)

  return (
    <Stack>
      <TechSection content={data} />
    </Stack>
  )
}
