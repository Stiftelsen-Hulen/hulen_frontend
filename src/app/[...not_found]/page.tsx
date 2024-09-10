import { NotFoundPageContent } from '@/pageComponents/notFoundPage'
import { get404PageContent } from '@/util/sanity'

export default async function Not_Found() {
  const noPageContentData = await get404PageContent()

  return <NotFoundPageContent {...noPageContentData} />
}
