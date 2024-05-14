import { JoinUsPageContent } from '@/pageComponents/joinUsPage'
import { getJoinUsPageContent } from '@/util/sanity'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'
import { Stack } from '@mui/material'

export default async function JoinUsPage() {
  const data = await getJoinUsPageContent()

  return (
    <Stack alignItems={'center'} padding='2rem 0rem' width={'100%'}>
      <Stack maxWidth={DEFAULT_LAYOUT_MAXWIDTH} width={'100%'}>
        <JoinUsPageContent content={data} />
      </Stack>
    </Stack>
  )
}
