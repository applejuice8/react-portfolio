/**
 * Shared data shapes. Everything under src/data is self-contained:
 * the data files, these types and the images folder can be moved together.
 *
 * Image fields hold a FILE NAME only (e.g. "cs50x.png"). The folder is implied
 * by the data type (certs/, education/, experience/, projects/, ...). See lib/assets.ts.
 */

/** A logo with separate files for light and dark backgrounds. */
export interface ThemedLogo {
    name?: string
    light: string
    dark: string
    /** The image has its own background colour, so round avatars should show it edge to edge with no padding. */
    fullBleed?: boolean
}

/** A logo with one file that is used on every background, e.g. one that carries its own background colour. */
export interface SingleLogo {
    name?: string
    file: string
    /** The image has its own background colour, so round avatars should show it edge to edge with no padding. */
    fullBleed?: boolean
}

export type AnyLogo = ThemedLogo | SingleLogo

export interface DateRange {
    start: string // e.g. "September 2024"
    end: string // e.g. "Present"
    note?: string // e.g. "Expected: August 2027"
}

export interface Profile {
    name: string
    title: string
    tagline: string
    location: string
    availability?: string
    about: string[] // paragraphs
    /** Phrases highlighted in the about text (first occurrence per paragraph). */
    highlights: string[]
    image: string // file in /images
    /** The same picture with the background removed (transparent PNG), for designs that put the person on their own backdrop. */
    imageCutout: string // file in /images
    resumeUrl: string
}

export interface Education {
    name: string
    programme: string
    gradeLabel: 'CGPA' | 'SPM'
    grade: string
    period: DateRange
    logos: ThemedLogo[]
}

export interface Experience {
    company: string
    location: string
    title: string
    period: DateRange
    points: string[]
    logo?: AnyLogo
    link?: string
}

/** One role held in a club. A club can have several, in any order. */
export interface ClubPosition {
    role: string
    period: DateRange // end can be "Present"
}

export interface Club {
    name: string
    positions: ClubPosition[]
    logo?: AnyLogo
}

export interface Skill {
    name: string
    /** File name in images/skills (svg or png). A missing file shows a placeholder. */
    icon: string
}

export interface SkillCategory {
    title: string
    iconClass: string // Font Awesome class for the category
    skills: Skill[]
}

export interface Project {
    name: string
    description: string
    tags: string[]
    image: string
    link: string
    featured: boolean
}

export interface Hackathon {
    name: string
    date: string // e.g. "October 2026"
    award: string // e.g. "Champion", "17th of 136 teams"
    issuer: string
    image?: string
}

export interface Cert {
    name: string
    issuer: string
    image: string
    featured: boolean
}

export interface SocialLink {
    name: string
    iconClass: string
    link: string
}
