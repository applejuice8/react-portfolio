import './About.css'

function About() {
    return(
        <>
            <div id="about-content">
                <p>I approach technology as a systems problem: understanding individual components, and how they interact with each other.</p>
                <p>I enjoy participating in <span className="highlight">hackathons</span> and <span className="highlight">CTFs</span>. Hackathons push me to think beyond the code and consider the business problem I'm actually addressing, while CTFs push me to develop a security-first mindset around identifying and mitigating system vulnerabilities.</p>
                <p>I'm active across various <span className="highlight">tech clubs</span> in my university, frequently organizing and participating in events. I also stay close to the broader tech community, occasionally attending meetups such as Codex, AWS, and Kubernetes events. I enjoy being around people of similar interests.</p>
                <p>Recently, I've been exploring <span className="highlight">Cloud technologies (AWS)</span>, <span className="highlight">Web3</span> and <span className="highlight">Go</span>.</p>
            </div>
        </>
    )
}

export default About