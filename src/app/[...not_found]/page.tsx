import { Page404Content } from '@/components/NoPageContent'
import { get404PageContent } from '@/util/sanity'

export default async function Not_Found() {
  const noPageContentData = await get404PageContent()

  return <Page404Content {...noPageContentData} />
}
