function SocialLink({ name, iconClass, link }) {
    return(
        <a href={link} target="_blank" className="social-icon pointer">
            <i className={iconClass}></i>
            <span className="tooltip-text">{name}</span>
        </a>
    )
}

export default SocialLink