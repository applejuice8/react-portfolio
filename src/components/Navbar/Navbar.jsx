import { useState, useEffect, useRef } from 'react';

import './Navbar.css'

const navLinks = ['home', 'about', 'education', 'skills', 'projects', 'certs']

function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isLight, setIsLight] = useState(false)
    const [indicator, setIndicator] = useState('home')
    const indicatorRef = useRef(null)

    function toggleTheme() {
        document.documentElement.classList.toggle('light-mode')
        setIsLight(!isLight)
    }

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

    // Add, remove scroll listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)  // Cleanup
    }, [])

    // Update indicator every time hook change
    useEffect(() => {
        const activeElement = document.querySelector(`.nav-link[href="#${indicator}"]`)
        if (!activeElement || !indicatorRef.current) return

        // Change size, location depending on active section
        indicatorRef.current.style.width = `${activeElement.getBoundingClientRect().width}px`
        indicatorRef.current.style.left = `${activeElement.offsetLeft + 24}px`
    }, [indicator])

    return(
        <header>
            <nav id="navbar">
                <div id="hamburger" className={`pointer ${isExpanded ? 'active' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul id="nav-links" className={isExpanded ? 'active' : ''}>
                    {navLinks.map(id => (
                        <li key={id}>
                            <a href={`#${id}`}
                                className={`nav-link pointer ${indicator === id ? 'active' : ''}`}
                                onClick={() => { setIndicator(id); setIsExpanded(false) }}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                <div id="nav-indicator" ref={indicatorRef}></div>
            </nav>

            <button id="theme-toggle" className="pointer" onClick={toggleTheme}>
                <i className={`fa-solid ${isLight ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
        </header>
    )
}

export default Navbar