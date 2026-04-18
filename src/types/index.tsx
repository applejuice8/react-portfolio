// Education
interface Logo {
    name: string
    light: string
    dark: string
}

export interface Education {
    name: string
    programme: string
    grade: string
    year: string
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