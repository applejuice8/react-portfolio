/**
 * Resolves image file names stored in the data files to bundled URLs.
 * Images live in src/data/images/<folder>/<file>. Vite fingerprints each file (cache-friendly) and
 * only bundles what is listed here, so unused images never reach the build.
 */
const modules = import.meta.glob('../data/images/**/*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
}) as Record<string, string>

const urls = new Map<string, string>()
for (const [path, url] of Object.entries(modules)) {
    const marker = '/images/'
    urls.set(path.slice(path.lastIndexOf(marker) + marker.length), url)
}

export type ImageFolder = '' | 'certs' | 'education' | 'experience' | 'clubs' | 'projects' | 'awards' | 'skills'

/** Returns the URL of an image, or undefined when no file exists (the UI shows a placeholder). */
export function getImage(folder: ImageFolder, file?: string): string | undefined {
    if (!file) return undefined
    return urls.get(folder ? `${folder}/${file}` : file)
}
