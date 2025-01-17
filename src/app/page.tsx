import { HulenPortableText } from '@/components/sanity'
import { getHomePageContent } from '@/util/sanity'

export default async function HomePage() {
  const data = await getHomePageContent()

  return (
    <>
      <HulenPortableText genericSanityPageProps={data.locale} />
      {/* Commenting out the TikTok iframe, but leacving it available for later.
      <iframe
        title='Frame section containing Hulen TicTok'
        width='325'
        height='800px'
        name='__tt_embed__v49072794894336560'
        frameBorder='0'
        src='https://www.tiktok.com/embed/v2/6981771083049340166?lang=en-US&amp;referrer=https%3A%2F%2Fwww.hulen.no%2F'
      /> */}
    </>
  )
}
/**
 * Next js use implicit configuration of pages. By exporting a variable named revalidate, we have now switched to incremental static regeneration (ISR)
 * This means that the page will be rebuilt if a request comes in, and the page is more than two minutes old
 */
export const revalidate = 120
