// Shared
export interface DateRange {
    start: string // e.g. "September 2024"
    end: string // e.g. "Present"
    note?: string // e.g. "Expected: August 2027"
}

// Profile
export interface Profile {
    name: string
    title: string
    tagline: string
    location: string
    availability?: string
    about: string[] // paragraphs
    /** Phrases highlighted in the about text (first occurrence per paragraph). */
    highlights: string[]
    image: string // file in /public/images
    /** The same picture with the background removed (transparent PNG). */
    imageCutout: string // file in /public/images
    resumeUrl: string
}

// Education
interface Logo {
    name: string
    light: string
    dark: string
}

export interface Education {
    name: string
    programme: string
    gradeLabel: 'CGPA' | 'SPM'
    grade: string
    period: DateRange
    logos: Logo[]
}

// Skills
export interface Skill {
    name: string
    icon: string
}

export interface SkillCategory {
    title: string
    iconClass: string
    skills: Skill[]
}

// Projects
export interface Project {
    name: string
    description: string
    tags: string[]
    image: string
    link: string
    featured: boolean
}

// Certs
export interface Cert {
    name: string
    issuer: string
    image: string
    featured: boolean
}

// Footer
export interface SocialLink {
    name: string
    iconClass: string
    link: string
}