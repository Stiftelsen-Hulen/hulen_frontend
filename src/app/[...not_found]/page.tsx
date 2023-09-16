import { Page404Content } from '@/components/NoPageContent'
import { get404PageContent } from '@/util/sanity'
import { Stack } from '@mui/material'

export default async function Not_Found() {
  const noPageContentData = await get404PageContent()

  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Page404Content {...noPageContentData} />
    </Stack>
  )
}
