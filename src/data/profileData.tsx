import { Profile } from './types'

const profileData: Profile = {
    name: 'Colin Leong Hong Seng',
    title: 'Software Engineering Intern @ Teel, Final Year Computer Science',
    tagline: 'Backend, cloud and security, seen as one system.',
    location: 'Selangor, Malaysia',
    availability: 'Open to internship · Jan – Apr 2027',
    about: [
        'I approach technology as a systems problem: understanding individual components, and how they interact with each other.',
        "I enjoy participating in hackathons and CTFs. Hackathons push me to think beyond the code and consider the business problem I'm actually addressing, while CTFs push me to develop a security-first mindset around identifying and mitigating system vulnerabilities.",
        "I'm active across various tech clubs in my university, frequently organizing and participating in events. I also stay close to the broader tech community, occasionally attending meetups such as Codex, AWS, and Kubernetes events. I enjoy being around people of similar interests.",
        "Recently, I've been exploring Cloud technologies (AWS), Web3 and Go.",
    ],
    highlights: ['hackathons', 'CTFs', 'tech clubs', 'Cloud technologies (AWS)', 'Web3', 'Go'],
    image: 'profile.png',
    imageCutout: 'profile-nobg.png',
    // Served from /public/resume.pdf
    resumeUrl: '/resume.pdf',
}

export default profileData
