import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Certifications from './components/Certifications/Certifications'

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
    </Layout>
  )
}

export default App