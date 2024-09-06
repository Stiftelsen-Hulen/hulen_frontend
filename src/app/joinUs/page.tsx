import { JoinUsPageContent } from '@/pageComponents/joinUsPage'
import { getJoinUsPageContent } from '@/util/sanity'

export default async function JoinUsPage() {
  const data = await getJoinUsPageContent()

  return <JoinUsPageContent content={data} />
}
