interface SocialLinkProps {
    name: string
    iconClass: string
    link: string
}

function SocialLink({ name, iconClass, link }: SocialLinkProps) {
    return(
        <a href={link} target="_blank" className="social-icon pointer">
            <i className={iconClass}></i>
            <span className="tooltip-text">{name}</span>
        </a>
    )
}

export default SocialLink