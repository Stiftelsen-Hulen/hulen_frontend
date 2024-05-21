import { GenericPagePropsRenderer } from '@/components/GenericPageContent'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'
import { getHomePageContent } from '@/util/sanity'
import { Stack } from '@mui/material'

export default async function HomePage() {
  const data = await getHomePageContent()

  return (
    <Stack sx={{ alignItems: 'center', padding: '2rem 2rem', width: '100%' }}>
      <Stack maxWidth={DEFAULT_LAYOUT_MAXWIDTH}>
        <GenericPagePropsRenderer genericSanityPageProps={data} />
      </Stack>
    </Stack>
  )
}
