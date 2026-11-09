import { Experience } from './types'

const experienceData: Experience[] = [
    {
        company: 'Teel',
        location: 'Bangsar, Kuala Lumpur',
        title: 'Software Engineering Intern',
        period: { start: 'August 2026', end: 'Present' },
        // One logo for every theme: the official white mark on the teal (#1A7488) background.
        logo: { name: 'Teel', file: 'teel.svg', fullBleed: true },
        points: [
            'Prevented quote-engine crashes by adding panic recovery to 6 concurrent provider fan-outs, so malformed third-party responses no longer crash the process or disrupt in-flight payout requests.',
            'Performed QA across sandbox payment and invoicing workflows, uncovering 40+ defects including balance inconsistencies, payout failures, validation gaps, stale UI state and provider pricing issues.',
            'Simplified the payout quote path by removing a redundant cross-service intelligence loop, reducing network latency, storage overhead and external failure points in the money-movement flow.',
        ],
    },
    {
        company: 'Upwork',
        location: 'Remote',
        title: 'Freelance Web Scraper',
        period: { start: 'January 2024', end: 'October 2025' },
        logo: { name: 'Upwork', light: 'upwork.svg', dark: 'upwork.svg' },
        points: [
            'Built custom scraping scripts using Python (Selenium, Playwright, Beautiful Soup) to extract data from websites.',
            'Delivered clean, well-formatted datasets to clients using pandas.',
        ],
    },
]

export default experienceData
