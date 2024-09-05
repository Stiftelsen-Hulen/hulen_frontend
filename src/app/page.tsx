import { HulenPortableText } from '@/components/GenericPageContent'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'
import { getHomePageContent } from '@/util/sanity'
import { Stack } from '@mui/material'

export default async function HomePage() {
  const data = await getHomePageContent()

  return (
    <Stack sx={{ alignItems: 'center', padding: '2rem', width: '100%' }}>
      <Stack
        sx={{
          width: '100%',
          maxWidth: DEFAULT_LAYOUT_MAXWIDTH,
          gap: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <HulenPortableText genericSanityPageProps={data.locale} />
        <iframe
          title='Frame section containing Hulen TicTok'
          width='325'
          height='800px'
          name='__tt_embed__v49072794894336560'
          frameBorder='0'
          src='https://www.tiktok.com/embed/v2/6981771083049340166?lang=en-US&amp;referrer=https%3A%2F%2Fwww.hulen.no%2F'
        />
      </Stack>
    </Stack>
  )
}
