import { JoinUsPageContent } from '@/components/joinUsPage'
import { getJoinUsPageContent } from '@/util/sanity'

export default async function JoinUsPage() {
  const data = await getJoinUsPageContent()

  return <JoinUsPageContent content={data} />
}
