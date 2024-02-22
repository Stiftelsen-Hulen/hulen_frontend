import { GenericPagePropsRenderer } from '@/components/GenericPageContent'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'
import { getAboutUsContent } from '@/util/sanity'
import { Stack } from '@mui/material'

export default async function AboutUsPage() {
  const data = await getAboutUsContent()

  return (
    <Stack alignItems={'center'} padding='2rem 0rem'>
      <Stack maxWidth={DEFAULT_LAYOUT_MAXWIDTH}>
        <GenericPagePropsRenderer genericSanityPageProps={data} />
      </Stack>
    </Stack>
  )
}
