import { ClientLayout } from '@/components/layout'
import ThemeRegistry from '@/util/ThemeRegistry/ThemeRegistry'
import { getFooterElements, getSanityNavigationElements, getTranslationObject } from '@/util/sanity'
import * as React from 'react'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerData = await getSanityNavigationElements()
  const footerData = await getFooterElements()
  const skipLinkData = await getTranslationObject('SkipLink')

  return (
    <html>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ThemeRegistry>
          <ClientLayout headerData={headerData} footerData={footerData} skipLinkData={skipLinkData}>
            {children}
          </ClientLayout>
        </ThemeRegistry>
      </body>
    </html>
  )
}
export const metadata = {
  title: 'Hulen',
  description: 'Hulen',
}
