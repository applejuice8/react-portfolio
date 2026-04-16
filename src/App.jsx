import { Analytics } from '@vercel/analytics/react'
import { useEffect } from 'react'
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Section from './components/Section/Section'
import Home from './components/Home/Home'
import About from './components/About/About'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Certs from './components/Certs/Certs'
import AllCerts from './pages/AllCerts'
import AllProjects from './pages/AllProjects'
import './App.css'

const sections = [
    { Component: About, id: 'about' },
    { Component: Education, id: 'education' },
    { Component: Skills, id: 'skills' },
    { Component: Projects, id: 'projects' },
    { Component: Certs, id: 'certs' },
]

function MainPage() {
    const { state } = useLocation()

    // Read router state, scroll to location
    useEffect(() => {
        if (state?.scrollTo) {
            document.getElementById(state.scrollTo)?.scrollIntoView()
        }
    }, [state])

    return (
        <Layout>
            <Home />
            {sections.map(({ Component, id }) => (
                <Section key={id} id={id}>
                    <Component />
                </Section>
            ))}
        </Layout>
    )
}

function App() {
    // Scroll to top when navigate
    function ScrollToTop() {
        const { pathname } = useLocation()

        useEffect(() => {
            window.scrollTo(0, 0)
        }, [pathname])

        // Start at top when page refresh
        return null
    }

    return (
        <ThemeProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/certs" element={<AllCerts />} />
                    <Route path="/projects" element={<AllProjects />} />
                </Routes>
            <Analytics />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App