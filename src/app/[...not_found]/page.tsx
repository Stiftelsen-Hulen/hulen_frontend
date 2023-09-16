import { Page404Content } from '@/components/NoPageContent'
import { get404PageContent } from '@/util/sanity'
import { Stack } from '@mui/material'

export async function getData() {
  const noDataContent = await get404PageContent()

  return noDataContent
}

export default async function Not_Found() {
  const noPageContentData = await getData()

  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Page404Content {...noPageContentData} />
    </Stack>
  )
}
