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

const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

/** "September 2024" -> sortable number (year * 12 + month). "Present" -> far future. */
export function monthYearValue(value: string): number {
    const [month, year] = value.toLowerCase().split(' ')
    const index = MONTHS.indexOf(month)
    if (index < 0 || !year) return Number.MAX_SAFE_INTEGER
    return Number(year) * 12 + index
}
