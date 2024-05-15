import { JoinUsPageContent } from '@/pageComponents/joinUsPage'
import { getJoinUsPageContent } from '@/util/sanity'
import { Stack } from '@mui/material'

export default async function JoinUsPage() {
  const data = await getJoinUsPageContent()

  return (
    <Stack sx={{ alignItems: 'center', width: '100%' }}>
      <Stack width={'100%'}>
        <JoinUsPageContent content={data} />
      </Stack>
    </Stack>
  )
}
