import { TechSection } from '@/pageComponents/infoPage/TechSection'
import type { TechInfoPageContent } from '@/types/sanity/infoPages/techInfoPage'
import { getTechInfoPageContent } from '@/util/sanity/apiFunctions'

export default async function InfoPage() {
  const data: TechInfoPageContent = await getTechInfoPageContent()

  return <TechSection content={data} />
}
