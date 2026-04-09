import SocialLink from './SocialLink'

const socialLinkData = [
    {
        link: 'https://github.com/applejuice8',
        iconClass: 'fa-brands fa-github',
        name: 'GitHub',
    },
    {
        link: 'https://www.linkedin.com/in/colin-leong-ba0a8233b/',
        iconClass: 'fab fa-linkedin',
        name: 'LinkedIn',
    },
]

function Footer() {
    return(
        <footer>
            <div id="social-icons">
                {socialLinkData.map((item, index) => (
                    <SocialLink key={index} {...item} />
                ))}
            </div>

            <span id="copyright">
                &copy; 2025 Colin Leong. All rights reserved.
            </span>
        </footer>
    )
}

export default Footer