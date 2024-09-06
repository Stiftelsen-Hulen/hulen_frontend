import { ContentWrapper } from '@/components/layout/ContentWrapper'
import { Page404Content } from '@/components/NoPageContent'
import { get404PageContent } from '@/util/sanity'

export default async function Not_Found() {
  const noPageContentData = await get404PageContent()

  return (
    <ContentWrapper>
      <Page404Content {...noPageContentData} />
    </ContentWrapper>
  )
}
