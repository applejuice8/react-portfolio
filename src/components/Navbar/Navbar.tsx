import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import Indicator from './Indicator'
import Hamburger from './Hamburger'
import './Navbar.css'

const navLinks: string[] = ['home', 'about', 'education', 'skills', 'projects', 'certs']

function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [indicator, setIndicator] = useState('home')

    // Add, remove scroll listener
    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY
            let activeSection

            // Check which section in view
            const sections = document.querySelectorAll('section')
            for (const section of sections) {
                const offsetTop = section.offsetTop - 150
                const offsetBot = offsetTop + section.offsetHeight

                if (scrollY >= offsetTop && scrollY < offsetBot) {
                    activeSection = section.getAttribute('id')
                    break
                }
            }
            // Set indicator if active section changed
            if (activeSection) {
                setIndicator(prev =>
                    (prev === activeSection) ? prev : activeSection
                )
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)  // Cleanup
    }, [])

    return(
        <header>
            <nav id="navbar">
                <Hamburger isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />

                <ul id="nav-links" className={isExpanded ? 'active' : ''}>
                    {navLinks.map(id => (
                        <li key={id}>
                            <a href={`#${id}`}
                            className={`nav-link pointer ${indicator === id ? 'active' : ''}`}
                            onClick={() => setIsExpanded(false)}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                <Indicator indicator={indicator} />
            </nav>

            <ThemeToggle />
        </header>
    )
}

export default Navbar