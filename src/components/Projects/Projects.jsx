import ProjectItem from './ProjectItem'
import projectsData from '../../data/projectsData'

import './Projects.css'

function Projects() {
    return(
        <div id="projects-container">
            {projectsData.map((item, index) => (
                <ProjectItem key={index} {...item} />
            ))}
        </div>
    )
}

export default Projects