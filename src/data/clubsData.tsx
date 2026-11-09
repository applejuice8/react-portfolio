import { Club } from './types'

/**
 * A club can hold several positions. Add a new object to `positions` when you get a new role.
 * Durations are counted as if today is the newest start date below, so a role starting soon already shows as current.
 */
const clubsData: Club[] = [
    {
        name: 'AWS Student Builder Group - Sunway University',
        positions: [
            {
                role: 'Executive of Event Management',
                period: { start: 'January 2026', end: 'Present' },
            },
            // {
            //     role: 'President',
            //     period: { start: 'December 2026', end: 'Present' },
            // },
        ],
        logo: { name: 'AWS SBG', light: 'aws-sbg.svg', dark: 'aws-sbg.svg' },
    },
    {
        name: 'Sunway Tech Club',
        positions: [
            {
                role: 'Committee - Education Department',
                period: { start: 'May 2026', end: 'Present' },
            },
        ],
        logo: { name: 'STC', light: 'stc.png', dark: 'stc.png' },
    },
    {
        name: 'Sunway AI Builders Club',
        positions: [
            {
                role: 'Tech Executive',
                period: { start: 'October 2026', end: 'Present' },
            },
        ],
        logo: { name: 'SAIBC', file: 'saibc.png' },
    },
]

export default clubsData
