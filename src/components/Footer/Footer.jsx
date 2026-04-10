import SocialLink from './SocialLink'
import socialData from '../../data/socialData'

function Footer() {
    return(
        <footer>
            <div id="social-icons">
                {socialData.map((item, index) => (
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