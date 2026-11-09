import profileData from '../../data/profileData'
import socialData from '../../data/socialData'
import './Home.css'

function Home() {
    const [first, second] = profileData.name.split(' ')

    return(
        <section id="home">
            <div id="home-text">
                <span id="home-intro">Hello, I am</span>
                <h1 id="home-name">{first} {second}</h1>
                <p id="home-role">{profileData.title}</p>
                {profileData.availability && (
                    <p id="home-availability">
                        <span id="home-availability-dot" aria-hidden="true" />
                        {profileData.availability}
                    </p>
                )}
                <div id="home-actions">
                    <a href={profileData.resumeUrl} download id="home-resume" className="pointer">
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
                <img src={`/images/${profileData.image}`} alt={profileData.name} id="profile-image" />
            </div>
        </section>
    )
}

export default Home
