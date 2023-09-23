import { GenericPagePropsRenderer } from '@/components/GenericPageContent'
import { getHomePageContent } from '@/util/sanity'
import { Stack } from '@mui/material'

export default async function HomePage() {
  const data = await getHomePageContent()

  return (
    <Stack alignItems={'center'} padding='2rem 0rem'>
      <GenericPagePropsRenderer genericSanityPageProps={data} />
    </Stack>
  )
}
