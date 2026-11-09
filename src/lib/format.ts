import type { DateRange } from '../data/types'

/** "September 2024 – Present" */
export function formatPeriod(period: DateRange): string {
    return `${period.start} – ${period.end}`
}

/** "Colin Leong" -> "CL". Used for the placeholder when an image is missing. */
export function initials(name: string): string {
    return name
        .replace(/[^A-Za-z0-9 ]/g, '')
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join('')
}
