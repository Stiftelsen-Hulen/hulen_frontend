import { createClient } from '@sanity/client'

/**
 *  Sanity client created by using credientials from the .env file used for fetching data from Sanity
 */
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2023-09-10',
})
