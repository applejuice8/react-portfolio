import SkillCategory from './SkillCategory'

const skillsData = [
    {
        title: 'Frontend',
        iconClass: 'fas fa-desktop',
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
        iconClass: 'fas fa-server',
        skills: [
            { name: 'Python', icon: 'python.svg' },
            { name: 'Flask', icon: 'flask.svg' },
            { name: 'FastAPI', icon: 'fastapi.svg' },
            { name: 'SQL', icon: 'sql.svg' },
            { name: 'SQLAlchemy', icon: 'sqlalchemy.png' },
            { name: 'Oracle Apex', icon: 'oracle-apex.svg' },
        ],
    },
    {
        title: 'Machine Learning & Data Science',
        iconClass: 'fas fa-robot',
        skills: [
            { name: 'PyTorch', icon: 'pytorch.svg' },
            { name: 'TensorFlow', icon: 'tensorflow.svg' },
            { name: 'Scikit-learn', icon: 'scikit-learn.svg' },
            { name: 'Pandas', icon: 'pandas.svg' },
            { name: 'Jupyter', icon: 'jupyter.svg' },
        ],
    },
];

function Skills() {
    return(
        <div id="skills-container">
            {skillsData.map((category, index) => (
                <SkillCategory
                key={index}
                title={category.title}
                iconClass={category.iconClass}
                skills={category.skills}
                />
            ))}
        </div>
    )
}

export default Skills