export type AwardTier = 'gold' | 'silver' | 'bronze' | 'finalist' | 'rank'

export function awardTier(award: string): AwardTier {
    const value = award.toLowerCase()
    if (value === 'champion') return 'gold'
    // A top-five national placement, e.g. "Top 4 in Malaysia (50th of 635 teams)", is styled like a champion.
    if (/^top [1-5] in /.test(value)) return 'gold'
    if (/^(first|1st) runner/.test(value)) return 'silver'
    if (/^(second|2nd) runner/.test(value)) return 'bronze'
    if (value === 'finalist') return 'finalist'
    return 'rank'
}

export const tierIcon: Record<AwardTier, string> = {
    gold: 'fa-solid fa-trophy',
    silver: 'fa-solid fa-medal',
    bronze: 'fa-solid fa-medal',
    finalist: 'fa-solid fa-flag-checkered',
    rank: 'fa-solid fa-ranking-star',
}
