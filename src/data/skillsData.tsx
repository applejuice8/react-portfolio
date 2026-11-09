import { SkillCategory } from './types'

/**
 * Icons are image files in images/skills (svg or png), referenced by file name.
 * A skill whose file is missing (TypeScript, Neon, AWS) shows a placeholder with its initials until the file is added.
 * Category icons are Font Awesome class names.
 */
const skillsData: SkillCategory[] = [
    {
        title: 'Frontend',
        iconClass: 'fa-solid fa-desktop',
        skills: [
            { name: 'JavaScript', icon: 'javascript.svg' },
            { name: 'TypeScript', icon: 'typescript.svg' },
            { name: 'React', icon: 'react.svg' },
            { name: 'Bootstrap', icon: 'bootstrap.svg' },
            { name: 'CSS', icon: 'css.svg' },
            { name: 'HTML', icon: 'html.svg' },
        ],
    },
    {
        title: 'Backend & Database',
        iconClass: 'fa-solid fa-server',
        skills: [
            { name: 'Python', icon: 'python.svg' },
            { name: 'FastAPI', icon: 'fastapi.svg' },
            { name: 'Django', icon: 'django.svg' },
            { name: 'Go', icon: 'go.svg' },
            { name: 'Flask', icon: 'flask.svg' },
            { name: 'SQLAlchemy', icon: 'sqlalchemy.svg' },
            { name: 'Neon', icon: 'neon.svg' },
            { name: 'Supabase', icon: 'supabase.svg' },
            { name: 'Redis', icon: 'redis.svg' },
            { name: 'Pydantic', icon: 'pydantic.svg' },
        ],
    },
    {
        title: 'Machine Learning',
        iconClass: 'fa-solid fa-robot',
        skills: [
            { name: 'Scikit-learn', icon: 'scikit-learn.svg' },
            { name: 'Pandas', icon: 'pandas.svg' },
            { name: 'Jupyter', icon: 'jupyter.svg' },
        ],
    },
    {
        title: 'Web Scraping & Automation',
        iconClass: 'fa-solid fa-spider',
        skills: [
            { name: 'Selenium', icon: 'selenium.svg' },
            { name: 'Playwright', icon: 'playwright.svg' },
            { name: 'Beautiful Soup', icon: 'beautiful-soup.png' },
        ],
    },
    {
        title: 'Others',
        iconClass: 'fa-solid fa-screwdriver-wrench',
        skills: [
            { name: 'Git', icon: 'git.svg' },
            { name: 'GitHub', icon: 'github.svg' },
            { name: 'AWS', icon: 'aws.svg' },
            { name: 'Java', icon: 'java.svg' },
            { name: 'Docker', icon: 'docker.svg' },
            { name: 'Linux', icon: 'linux.svg' },
            { name: 'Scala', icon: 'scala.svg' },
            { name: 'Haskell', icon: 'haskell.svg' },
            { name: 'C', icon: 'c.svg' },
            { name: 'GitHub Actions', icon: 'github-actions.svg' }
        ],
    },
]

export default skillsData
