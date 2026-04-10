import Layout from './components/Layout'
import Section from './components/Section/Section'
import Home from './components/Home/Home'
import About from './components/About/About'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Certs from './components/Certs/Certs'

import './App.css';

const sections = [About, Education, Skills, Projects, Certs]

function App() {
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

export default App