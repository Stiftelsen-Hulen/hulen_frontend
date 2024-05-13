import { JoinUsPageContent } from '@/pageComponents/joinUsPage'
import { getJoinUsPageContent } from '@/util/sanity'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'
import { Stack } from '@mui/material'

export default async function JoinUsPage() {
  const data = await getJoinUsPageContent()

  return (
    <Stack alignItems={'center'} paddingTop='2rem'>
      <Stack maxWidth={DEFAULT_LAYOUT_MAXWIDTH}>
        <JoinUsPageContent content={data} />
      </Stack>
    </Stack>
  )
}
