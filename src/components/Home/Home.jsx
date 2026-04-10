import './Home.css'

function Home() {
    return(
        <section id="home" class="home-container">
            <div id="home-text">
                <span id="home-intro">Hello, I am</span>
                <h1 id="home-name">Colin Leong</h1>
                <span id="home-role">Software Engineer</span>
            </div>
            <div id="profile-container">
                <img src="/images/profile.jpg" alt="Profile Image" id="profile-image" />
            </div>
        </section>
    )
}

export default Home