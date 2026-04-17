import { useNavigate } from 'react-router-dom'
import ProjectItem from './ProjectItem'
import projectsData from '../../data/projectsData'
import NiceButton from '../NiceButton/NiceButton'
import './Projects.css'

const featured = projectsData.filter(p => p.featured)

function Projects() {
    const navigate = useNavigate()

    return(
        <>
            <div id="projects-container">
                {featured.map((item, index) => (
                    <ProjectItem key={index} {...item} />
                ))}
            </div>

            <NiceButton text="View All Projects" isCenter={true} onClick={() => navigate('/projects')} />
        </>
    )
}

export default Projects