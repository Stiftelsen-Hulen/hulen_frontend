import { GenericPagePropsRenderer } from '@/components/GenericPageContent'
import { DEFAULT_LAYOUT_MAXWIDTH } from '@/configs/constants'
import { getAboutUsContent } from '@/util/sanity'
import { Stack } from '@mui/material'

export default async function AboutUsPage() {
  const data = await getAboutUsContent()

  return (
    <Stack sx={{ alignItems: 'center', padding: '2rem' }}>
      <Stack sx={{ width: '100%', maxWidth: DEFAULT_LAYOUT_MAXWIDTH, gap: '2rem' }}>
        <GenericPagePropsRenderer genericSanityPageProps={data} />
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=Olaf%20Ryes%20vei%2048&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
          title="Olaf Ryes vei 48"
          aria-label="Olaf Ryes vei 48"
          width='100%'
          height='400'
        />
      </Stack>
    </Stack>
  )
}
