import { useNavigate } from 'react-router-dom'
import ProjectItem from '../../components/Projects/ProjectItem'
import BackButton from '../../components/BackButton/BackButton'
import projectsData from '../../data/projectsData'
import Footer from '../../components/Footer/Footer'

import './AllProjects.css'

function AllProjects() {
    const navigate = useNavigate()

    function returnHome() {
        navigate('/')
        
        setTimeout(() => {
            document.getElementById('projects')?.scrollIntoView()
        }, 100)
    }

    return (
        <>
            <div id="allprojects-container">
                <BackButton text="Return" onClick={() => returnHome()} />

                <h2 className="section-title">All Projects</h2>

                <div id="projects-container">
                    {projectsData.map((item, index) => (
                        <ProjectItem key={index} {...item} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AllProjects