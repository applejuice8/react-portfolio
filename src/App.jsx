import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Section from './components/Section/Section'
import Home from './components/Home/Home'
import About from './components/About/About'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Certs from './components/Certs/Certs'
import AllCerts from './pages/AllCerts/AllCerts'

import './App.css';

const sections = [About, Education, Skills, Projects, Certs]

function MainPage() {
    return (
        <Layout>
            <Home />
            {sections.map((Component) => (
                <Section key={Component.name} id={Component.name.toLowerCase()}>
                    <Component />
                </Section>
            ))}
        </Layout>
    )
}

function App() {
  return (
    <ThemeProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/certs" element={<AllCerts />} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
  )
}

export default App