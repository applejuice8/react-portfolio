import ProjectItem from './ProjectItem'

// function ProjectItem({ image, name, description, tags, link }) {
const projectData = [
    {
        image: 'images/projects/Course Enrollment API.png',
        name: 'Course Enrollment API',
        description: 'A structured and scalable RESTful API built with FastAPI, SQLAlchemy and SQLite for managing courses, students and enrollments.',
        tags: ['Python', 'FastAPI', 'REST API', 'SQLAlchemy'],
        link: 'https://github.com/applejuice8/course-enrollment'
    },
    {
        image: 'images/projects/Spam Classifier.jpeg',
        name: 'Spam Classifier',
        description: 'A spam classification model built in Python and Scikit-learn to filter spam messages, achieving an accuracy of 97%.',
        tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Classification'],
        link: 'https://github.com/applejuice8/spam-classification'
    }
]

function Projects() {
    return(
        <div id="projects-container">
            {projectData.map((item, index) => (
                <ProjectItem key={index} {...item} />
            ))}
        </div>
    )
}

export default Projects