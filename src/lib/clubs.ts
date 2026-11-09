import type { Club, ClubPosition } from '../data/types'
import { monthYearValue } from './format'

/** Positions, newest start first. */
export function newestFirst(club: Club): ClubPosition[] {
    return [...club.positions].sort((a, b) => monthYearValue(b.period.start) - monthYearValue(a.period.start))
}
