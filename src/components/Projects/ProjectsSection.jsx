import ProjectItem from './ProjectItem';
import projects from './projectsData';

function ProjectSection() {
    return (
        <section id='projects'>
            <h2 className='section-title'>My Projects</h2>
            <div id='projects-container'>
                {projects.map((project, index) => (
                    <ProjectItem key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default ProjectSection;