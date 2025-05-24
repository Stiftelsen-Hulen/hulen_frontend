import type { MetadataRoute } from 'next'
import path from 'path'
import fs from 'fs'

const baseUrl = process.env.SITE_URL || 'http:localhost:3000'
const baseDir = 'src/app'
export const revalidate = 3600 // revalidate at most every hour

async function getRoutes(): Promise<MetadataRoute.Sitemap> {
  const fullPath = path.join(process.cwd(), baseDir)
  const entries = fs.readdirSync(fullPath, { withFileTypes: true, recursive: true })
  const routes: string[] = ['/']

  entries.forEach((entry) => {
    if (entry.isDirectory() && entryHasPageFile(entry)) {
      routes.push(`/${path.relative(fullPath, entry.path)}/${entry.name}`)
    }
  })

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    // lastModified: new Date(),
    changeFrequency: 'monthly',
    // priority: 1.0,
  }))
}

/**
 * Checks if the entry (directory / symbolic link) has a 'page.tsx' file.
 * @param entry file-system entry
 * @returns whether entry has 'page.tsx' file.
 */
function entryHasPageFile(entry: fs.Dirent): boolean {
  const directories = fs.readdirSync(path.join(entry.path, entry.name), { withFileTypes: true })
  const pageFile = directories.find((f) => f.name == 'page.tsx')

  return pageFile !== undefined
}

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  return getRoutes()
}
