import { GuardianSection } from '@/pageComponents/infoPage/GuardianSection'
import type { GuardianInfoPageContent } from '@/types/sanity/infoPages'
import { getGuardianInfoPageContent } from '@/util/sanity'
import { Box } from '@mui/material'

export default async function GuardianPage() {
  const data: GuardianInfoPageContent = await getGuardianInfoPageContent()

  return (
    <Box>
      <GuardianSection content={data} />
    </Box>
  )
}
