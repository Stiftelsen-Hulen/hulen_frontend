import { HulenPortableText } from '@/components/GenericPageContent'
import { ContentWrapper } from '@/components/layout/ContentWrapper'
import { getAccessibilityPageProps } from '@/util/sanity'

export default async function AccessibilityPage() {
  const data = await getAccessibilityPageProps()

  return (
    <ContentWrapper>
      <HulenPortableText genericSanityPageProps={data.locale} />
    </ContentWrapper>
  )
}
