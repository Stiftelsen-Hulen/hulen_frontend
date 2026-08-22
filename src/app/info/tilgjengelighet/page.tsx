import { AvailabilitySection } from '@/pageComponents/infoPage'
import { getAvailabilityPageContent } from '@/util/sanity'

export default async function TilgjengelighetPage() {
  const data = await getAvailabilityPageContent()

  return <AvailabilitySection content={data} />
}
/**
 * Next js use implicit configuration of pages. By exporting a variable named revalidate, we have now switched to incremental static regeneration (ISR)
 * This means that the page will be rebuilt if a request comes in, and the page is more than two minutes old
 */
export const revalidate = 120
