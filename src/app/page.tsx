import { HulenPortableText } from '@/components/sanity'
import { getHomePageContent } from '@/util/sanity'

export default async function HomePage() {
  const data = await getHomePageContent()

  return (
    <>
      <HulenPortableText genericSanityPageProps={data.locale} />
      <iframe
        title='Frame section containing Hulen TicTok'
        width='325'
        height='800px'
        name='__tt_embed__v49072794894336560'
        frameBorder='0'
        src='https://www.tiktok.com/embed/v2/6981771083049340166?lang=en-US&amp;referrer=https%3A%2F%2Fwww.hulen.no%2F'
      />
    </>
  )
}
