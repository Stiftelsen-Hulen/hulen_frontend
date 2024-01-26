import { ContactPageContent } from '@/components/ContactPage'
import { getContactPageContent } from '@/util/sanity'

export default async function ContactPage() {
  const data = await getContactPageContent()

  return <ContactPageContent content={data} />
}
