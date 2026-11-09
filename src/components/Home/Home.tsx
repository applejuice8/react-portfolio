import socialData from '../../data/socialData'
import './Home.css'

function Home() {
    return(
        <section id="home">
            <div id="home-text">
                <span id="home-intro">Hello, I am</span>
                <h1 id="home-name">Colin Leong</h1>
                <p id="home-role">Software Engineering Intern @ Teel, Final Year Computer Science</p>
                <p id="home-availability">
                    <span id="home-availability-dot" aria-hidden="true" />
                    Open to internship · Jan – Apr 2027
                </p>
                <div id="home-actions">
                    <a href="/resume.pdf" download id="home-resume" className="pointer">
                        <i className="fa-solid fa-download" aria-hidden="true"></i> Download Resume
                    </a>
                    {socialData.map(({ name, iconClass, link }) => (
                        <a key={name} href={link} target="_blank" rel="noreferrer" aria-label={name} className="home-social pointer">
                            <i className={iconClass} aria-hidden="true"></i>
                        </a>
                    ))}
                </div>
            </div>
            <div id="profile-container">
                <img src="/images/profile.png" alt="Colin Leong" id="profile-image" />
            </div>
        </section>
    )
}

export default Home
