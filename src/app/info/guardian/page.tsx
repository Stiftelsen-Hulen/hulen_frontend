import { GuardianSection } from '@/pageComponents/infoPage/GuardianSection'
import type { GuardianInfoPageContent } from '@/types/sanity/infoPages'
import { getGuardianInfoPageContent } from '@/util/sanity'

export default async function GuardianPage() {
  const data: GuardianInfoPageContent = await getGuardianInfoPageContent()

  return <GuardianSection content={data} />
}
