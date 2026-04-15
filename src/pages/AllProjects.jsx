import ProjectItem from '../components/Projects/ProjectItem'
import BackButton from '../components/BackButton/BackButton'
import projectsData from '../data/projectsData'
import Footer from '../components/Footer/Footer'
import './All.css'

function AllProjects() {
    return (
        <>
            <div class="all-container">
                <BackButton section="projects" />

                <h2 className="section-title">All Projects</h2>

                <div id="projects-container">
                    {projectsData.map((item, index) => (
                        <ProjectItem key={index} {...item} />
                    ))}
                </div>

                <BackButton section="projects" />
            </div>

            <Footer />
        </>
    )
}

export default AllProjects