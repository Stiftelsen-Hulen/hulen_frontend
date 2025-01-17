import { TechSection } from '@/pageComponents/infoPage/TechSection'
import type { TechInfoPageContent } from '@/types/sanity/infoPages/techInfoPage'
import { getTechInfoPageContent } from '@/util/sanity/apiFunctions'

export default async function InfoPage() {
  const data: TechInfoPageContent = await getTechInfoPageContent()

  return <TechSection content={data} />
}
/**
 * Next js use implicit configuration of pages. By exporting a variable named revalidate, we have now switched to incremental static regeneration (ISR)
 * This means that the page will be rebuilt if a request comes in, and the page is more than two minutes old
 */
export const revalidate = 120
