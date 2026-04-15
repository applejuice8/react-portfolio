import ProjectItem from './ProjectItem'
import projectsData from '../../data/projectsData'
import NiceButton from '../NiceButton/NiceButton'

import './Projects.css'

function Projects() {
    return(
        <>
            <div id="projects-container">
                {projectsData.map((item, index) => (
                    <ProjectItem key={index} {...item} />
                ))}
            </div>

            <NiceButton text="View All Projects" isCenter={true} onClick={() => navigate('/projects')} />
        </>
    )
}

export default Projects