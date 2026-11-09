import { Hackathon } from './types'

/**
 * How many other hackathons you took part in that are NOT listed below (no result or photo to show).
 * Final shows them as a "+n more" tile after the listed ones. Set to 0 to hide the tile.
 */
export const hackathonsMore = 10

const hackathonsData: Hackathon[] = [
    {
        name: 'ImagineHack 2026',
        date: '19 - 21 June 2026',
        award: '1st Runner Up',
        issuer: "Taylor's University Agents of Tech Club",
        image: 'imaginehack-2026.png',
    },
    {
        name: 'DORMATHON 2026',
        date: '10 - 11 October 2026',
        award: '2nd Runner Up',
        issuer: 'AI Hackerdorm',
        image: 'dormathon-2026.jpeg',
    },
    {
        name: 'Chutes Hack Malaysia 2026',
        date: '18 May - 30 June 2026',
        award: '2nd Runner Up',
        issuer: 'Nyala Labs',
        image: 'chutes-hack-2026.png',
    },
    {
        name: 'Qwen Brainrot Hackathon 2026',
        date: '25 July 2026',
        award: 'Finalist',
        issuer: 'Qwen',
        image: 'qwen-brainrot-hackathon-2026.jpg',
    },
    {
        name: 'UM Hackathon 2026',
        date: '16 - 26 April 2026',
        award: '17th of 136 teams',
        issuer: 'Persatuan Komputer Universiti Malaya (PEKOM)',
        image: 'um-hackathon-2026.png',
    },
]

export default hackathonsData
