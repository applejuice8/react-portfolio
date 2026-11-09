import { Education } from './types'

const educationData: Education[] = [
    {
        name: 'Sunway University & Lancaster University',
        programme: 'Bachelor of Science (Honours) in Computer Science',
        gradeLabel: 'CGPA',
        grade: '3.98 / 4.0',
        period: { start: 'September 2024', end: 'Present', note: 'Expected: August 2027' },
        logos: [
            {
                name: 'Sunway University',
                light: 'sunway-university-light.png',
                dark: 'sunway-university-dark.png',
            },
            {
                name: 'Lancaster University',
                light: 'lancaster-university-light.png',
                dark: 'lancaster-university-dark.png',
            },
        ],
    },
    {
        name: 'Sunway College',
        programme: 'Foundation in Science and Technology',
        gradeLabel: 'CGPA',
        grade: '4.0 / 4.0',
        period: { start: 'August 2023', end: 'August 2024' },
        logos: [
            {
                name: 'Sunway College',
                light: 'sunway-college-light.png',
                dark: 'sunway-college-dark.png',
            },
        ],
    },
    {
        name: 'Catholic High School, PJ (SMJK Katholik)',
        programme: 'Sijil Pelajaran Malaysia (SPM)',
        gradeLabel: 'SPM',
        grade: '9A',
        period: { start: 'January 2018', end: 'March 2023' },
        logos: [
            {
                name: 'Catholic High School, PJ (SMJK Katholik)',
                light: 'catholic-high-school.png',
                dark: 'catholic-high-school.png',
            },
        ],
    },
]

export default educationData
