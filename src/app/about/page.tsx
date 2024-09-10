import { HulenPortableText } from '@/components/sanity'
import { getAboutUsContent } from '@/util/sanity'

export default async function AboutUsPage() {
  const data = await getAboutUsContent()

  return (
    <>
      <HulenPortableText genericSanityPageProps={data.locale} />
      <iframe
        loading='lazy'
        src='https://maps.google.com/maps?q=Olaf%20Ryes%20vei%2048&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near'
        title='Olaf Ryes vei 48'
        aria-label='Olaf Ryes vei 48'
        width='100%'
        height='400'
      />
    </>
  )
}
