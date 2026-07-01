import { SkillCategory } from '../types'

const skillsData: SkillCategory[] = [
    {
        title: 'Frontend',
        iconClass: 'desktop',
        skills: [
            { name: 'HTML', icon: 'html.svg' },
            { name: 'CSS', icon: 'css.svg' },
            { name: 'JavaScript', icon: 'javascript.svg' },
            { name: 'React', icon: 'react.svg' },
            { name: 'Bootstrap', icon: 'bootstrap.svg' },
        ],
    },
    {
        title: 'Backend & Database',
        iconClass: 'server',
        skills: [
            { name: 'Django', icon: 'django.svg' },
            { name: 'FastAPI', icon: 'fastapi.svg' },
            { name: 'Flask', icon: 'flask.svg' },
            { name: 'Go', icon: 'go.svg' },
            { name: 'Gin', icon: 'gin.png' },
            { name: 'Supabase', icon: 'supabase.png' },
            { name: 'Redis', icon: 'redis.svg' },
            { name: 'SQLAlchemy', icon: 'sqlalchemy.png' },
        ],
    },
    {
        title: 'Machine Learning & Data Science',
        iconClass: 'robot',
        skills: [
            { name: 'PyTorch', icon: 'pytorch.svg' },
            { name: 'Scikit-learn', icon: 'scikit-learn.svg' },
            { name: 'Pandas', icon: 'pandas.svg' },
            { name: 'Jupyter', icon: 'jupyter.svg' },
        ],
    },
    {
        title: 'Web Scraping & Automation',
        iconClass: 'spider',
        skills: [
            { name: 'Python', icon: 'python.svg' },
            { name: 'Selenium', icon: 'selenium.svg' },
            { name: 'Playwright', icon: 'playwright.svg' },
            { name: 'Beautiful Soup', icon: 'beautiful-soup.png' },
        ],
    },
    {
        title: 'Others',
        iconClass: 'tools',
        skills: [
            { name: 'Git', icon: 'git.svg' },
            { name: 'Java', icon: 'java.svg' },
            { name: 'Haskell', icon: 'haskell.svg' },
            { name: 'Docker', icon: 'docker.svg' },
            { name: 'Scala', icon: 'scala.svg' },
            { name: 'C', icon: 'c.svg' },
            { name: 'GitHub', icon: 'github.svg' },
            { name: 'Linux', icon: 'linux.svg' },
        ],
    },
]

export default skillsData