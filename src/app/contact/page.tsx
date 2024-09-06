import { ContentWrapper } from '@/components/layout/ContentWrapper'
import { ContactPageContent } from '@/pageComponents/ContactPage'
import { getContactPageContent } from '@/util/sanity'

export default async function ContactPage() {
  const data = await getContactPageContent()

  return (
    <ContentWrapper>
      <ContactPageContent content={data} />
    </ContentWrapper>
  )
}
