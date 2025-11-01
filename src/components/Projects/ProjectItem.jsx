function ProjectItem({ title, image, description, tags, link }) {
    return (
        <article className='project'>
            <div className='project-image-container'>
                <img src={image} alt={title} className='project-image' />
            </div>

            <div className='project-content'>
                <h3 className='project-title'>{title}</h3>
                <p className='project-description'>{description}</p>

                <div className='project-tags'>
                    {tags.map((tag, index) => (
                        <span key={index} className='tag'>{tag}</span>
                    ))}
                </div>

                <a href={link} target='_blank' rel='noopener noreferrer' className='project-link pointer'>
                    <i className='fa-brands fa-github'></i>
                    Source Code
                    <i className='fa-solid fa-up-right-from-square'></i>
                </a>
            </div>
        </article>
    );
}

export default ProjectItem;