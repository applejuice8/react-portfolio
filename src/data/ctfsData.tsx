import { Hackathon } from './types'

/**
 * How many other CTFs you took part in that are NOT listed below (no result or photo to show).
 * Final shows them as a "+n more" tile after the listed ones. Set to 0 to hide the tile.
 */
export const ctfsMore = 1

const ctfsData: Hackathon[] = [
    {
        name: 'CAPTCHA The Flag 2026',
        date: '24 October 2026',
        award: 'Champion',
        issuer: "Taylor's University Agents of Tech Club × Sunway Cybersecurity Club",
        image: 'captcha-the-flag-2026.jpeg',
    },
    {
        name: 'Kaspersky{CTF} 2026',
        date: '29 - 30 August 2026',
        award: 'Top 4 in Malaysia',
        issuer: 'Kaspersky',
        image: 'kaspersky-ctf-2026.png',
    },
    {
        name: 'Agentic AI-Driven CTF Hackathon 2026',
        date: '6 August 2026',
        award: '16th of 57 teams',
        issuer: 'UCSI University',
        image: 'agentic-ai-ctf-2026.jpeg',
    },
    {
        name: 'SunCTF 2026',
        date: '6 September 2026',
        award: '24th of 82 teams',
        issuer: 'Sunway Cybersecurity Club',
        image: 'sunctf-2026.jpeg',
    },
]

export default ctfsData
