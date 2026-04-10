import { useState, useEffect, useRef } from 'react';

import './Navbar.css'

function Navbar() {
    const navLinks = ['home', 'about', 'education', 'skills', 'projects', 'certs']

    const [isExpanded, setIsExpanded] = useState(false)
    const [isLight, setIsLight] = useState(false)
    const [indicator, setIndicator] = useState('home')
    const indicatorRef = useRef(null)

    function toggleTheme() {
        document.documentElement.classList.toggle('light-mode')
        setIsLight(!isLight)
    }

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY
            let activeSection

            document.querySelectorAll('section').forEach(section => {
                const offsetTop = section.offsetTop - 150
                const offsetBot = offsetTop + section.offsetHeight

                // If in range
                if (scrollY >= offsetTop && scrollY < offsetBot)
                    activeSection = section.getAttribute('id')
            })
            if (activeSection) setIndicator(activeSection)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)  // Cleanup
    }, [])

    function updateIndicator(activeSection) {
        const activeElement = document.querySelector(`.nav-link[href="#${activeSection}"]`)
        if (!activeElement || !indicatorRef.current) return
        indicatorRef.current.style.width = `${activeElement.getBoundingClientRect().width}px`
        indicatorRef.current.style.left = `${activeElement.offsetLeft + 24}px`
    }

    useEffect(() => {
        updateIndicator(indicator)
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