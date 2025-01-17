import { NotFoundPageContent } from '@/pageComponents/notFoundPage'
import { get404PageContent } from '@/util/sanity'

export default async function Not_Found() {
  const noPageContentData = await get404PageContent()

  return <NotFoundPageContent {...noPageContentData} />
}

/**
 * Next js use implicit configuration of pages. By exporting a variable named revalidate, we have now switched to incremental static regeneration (ISR)
 * This means that the page will be rebuilt if a request comes in, and the page is more than two minutes old
 */
export const revalidate = 120
