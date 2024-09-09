import { HulenPortableText } from '@/components/sanity'
import { getAccessibilityPageProps } from '@/util/sanity'

export default async function AccessibilityPage() {
  const data = await getAccessibilityPageProps()

  return <HulenPortableText genericSanityPageProps={data.locale} />
}
