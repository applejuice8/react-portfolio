import { useState, useEffect, useRef } from 'react';

function Navbar() {
    const [menuActive, setMenuActive] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const indicatorRef = useRef(null);
    const navLinksRef = useRef([]);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#certs', label: 'Certs' },
        { href: '#contact', label: 'Contact' },
    ];

    // Toggle mobile menu
    const toggleMenu = () => setMenuActive(prev => !prev);

    // Update indicator position
    const updateIndicator = (linkEl) => {
        if (!linkEl || window.innerWidth <= 768) return;

        const rect = linkEl.getBoundingClientRect();
        indicatorRef.current.style.width = `${rect.width}px`;
        indicatorRef.current.style.left = `${linkEl.offsetLeft}px`;
    };

    // Scroll tracking
    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        let current = 'home';

        document.querySelectorAll('section').forEach((section) => {
            const top = section.offsetTop - 150;
            const bottom = top + section.offsetHeight;
            if (scrollY >= top && scrollY < bottom) {
            current = section.id === 'education' ? 'about' : section.id;
            }
        });

        setActiveSection(current);
        const activeLink = navLinksRef.current.find(
            (a) => a.getAttribute('href') === `#${current}`
        );
        updateIndicator(activeLink);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Adjust indicator on resize
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth > 768) {
            setMenuActive(false);
            const activeLink = navLinksRef.current.find(
            (a) => a.getAttribute('href') === `#${activeSection}`
            );
            updateIndicator(activeLink);
        }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [activeSection]);

    // Initial indicator setup
    useEffect(() => {
        const activeLink = navLinksRef.current.find(
        (a) => a.getAttribute('href') === `#${activeSection}`
        );
        updateIndicator(activeLink);
    }, []);

    return (
        <nav>
        <div id='logo'>C</div>

        <div
            id='hamburger'
            className={`pointer ${menuActive ? 'active' : ''}`}
            onClick={toggleMenu}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>

        <ul id='nav-links' className={menuActive ? 'active' : ''}>
            {navLinks.map((link, i) => (
            <li key={link.href}>
                <a
                href={link.href}
                className={`nav-link pointer ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={() => setMenuActive(false)}
                ref={(el) => (navLinksRef.current[i] = el)}
                >
                {link.label}
                </a>
            </li>
            ))}
        </ul>

        <div id='nav-indicator' ref={indicatorRef}></div>
        </nav>
    );
}

export default Navbar;