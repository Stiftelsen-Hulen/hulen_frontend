import type { MetadataRoute } from 'next'
import path from 'path'
import fs from 'fs'

const baseUrl = process.env.SITE_URL || 'http://localhost:3000'
const baseDir = 'src/app'
export const revalidate = 3600 // revalidate at most every hour

async function getRoutes(): Promise<MetadataRoute.Sitemap> {
  const fullPath = path.join(process.cwd(), baseDir)
  const routes: string[] = ['/']

  walkDirectories(fullPath, (dirPath) => {
    if (dirHasPageFile(dirPath)) {
      const relativeDir = path.relative(fullPath, dirPath)
      routes.push(relativeDir ? `/${relativeDir.replaceAll(path.sep, '/')}` : '/')
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
 * Walks all directories under a root directory (including the root itself).
 *
 * @param rootDir absolute directory path to start from
 * @param onDirectory callback invoked once for each visited directory
 */
function walkDirectories(rootDir: string, onDirectory: (dirPath: string) => void) {
  const stack: string[] = [rootDir]

  while (stack.length > 0) {
    const currentDir = stack.pop()
    if (!currentDir) continue

    onDirectory(currentDir)

    const entries = fs.readdirSync(currentDir, { withFileTypes: true })
    for (const entry of entries) {
      if (!entry.isDirectory()) continue

      stack.push(path.join(currentDir, entry.name))
    }
  }
}

/**
 * Checks whether a directory contains a Next.js App Router page file (`page.tsx`).
 *
 * @param dirPath absolute path to the directory
 * @returns true if the directory contains `page.tsx`
 */
function dirHasPageFile(dirPath: string): boolean {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  return entries.some((entry) => entry.isFile() && entry.name === 'page.tsx')
}

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  return getRoutes()
}
