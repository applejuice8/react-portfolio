function Footer() {
    const socialLinks = [
        { label: 'GitHub', icon: 'fa-brands fa-github', href: 'https://github.com/applejuice8' },
        { label: 'LinkedIn', icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/colin-leong-ba0a8233b/' },
        { label: 'Instagram', icon: 'fab fa-instagram', href: 'https://www.instagram.com/colin_lhs/' },
        { label: 'LeetCode', icon: 'devicon-leetcode-plain', href: 'https://leetcode.com/u/colinleonghongseng/' },
        { label: 'Email', icon: 'fas fa-envelope', href: 'mailto:23075450@imail.sunway.edu.my' }
    ];

    return (
        <footer>
            <div id='social-icons'>
                {socialLinks.map(({ href, icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-icon pointer'
                        aria-label={label}
                    >
                        <i className={icon}></i>
                        <span className='tooltip-text'>{label}</span>
                    </a>
                ))}
            </div>

            <span id='copyright'>
                &copy; 2025 Colin Leong. All rights reserved.
            </span>
        </footer>
    );
}

export default Footer;