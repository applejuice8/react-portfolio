function ProjectItem({ name, description, tags, image, link }) {
    return(
        <article className="project">
            <div className="project-image-container">
                <img src={image} alt={name} className="project-image" />
            </div>
            <div className="project-content">
                <h3 className="project-title">{name}</h3>
                <p className="project-description">{description}</p>
                <div className="project-tags">
                    {tags.map((item, index) => (
                        <span className="tag" key={index}>{item}</span>
                    ))}
                </div>

                <a href={link} target="_blank" className="project-link pointer">
                    <i className="fa-brands fa-github"></i>
                    Source Code
                    <i className="fa-solid fa-up-right-from-square"></i>
                </a>
            </div>
        </article>
    )
}

export default ProjectItem