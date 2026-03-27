import Layout from './components/Layout'
import Section from './components/Section'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Certifications from './components/Certifications/Certifications'

const sections = [Home, About, Education, Skills, Projects, Certifications]

function App() {
  return (
    <Layout>
      {sections.map((Component) => (
        <Section key={Component.name} id={Component.name.toLowerCase()}>
          <Component />
        </Section>
      ))}
    </Layout>
  )
}

export default App