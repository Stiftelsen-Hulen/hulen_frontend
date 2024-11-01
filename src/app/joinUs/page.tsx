import { JoinUsPageContent } from '@/pageComponents/joinUsPage'
import { getJoinUsPageContent } from '@/util/sanity'

export default async function JoinUsPage() {
  const data = await getJoinUsPageContent()

  return <JoinUsPageContent content={data} />
}
/**
 * Next js use implicit configuration of pages. By exporting a variable named revalidate, we have now switched to incremental static regeneration (ISR)
 * This means that the page will be rebuilt if a request comes in, and the page is more than five minutes old
 */
export const revalidate = 300
