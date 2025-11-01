function About() {
    return (
        <section id='about'>
            <h2 className='section-title'>About Me</h2>
            <div id='about-content'>
                <p>Hello! I'm <span className='highlight'>Colin Leong</span>, a Year 2 <span className='highlight'>Computer Science (Hons)</span> student at <span className='highlight'>Sunway University</span>.</p>
                <p>My strongest skill is in <span className='highlight'>Python</span>, and I often build automation scripts using <span className='highlight'>Selenium</span> to automate repetitive tasks I encounter in daily workflows.</p>
                <p>I'm passionate about <span className='highlight'>Artificial Intelligence</span> and <span className='highlight'>Computer Vision</span>. Currently, I'm expanding my knowledge using libraries such as <span className='highlight'>Scikit-learn</span> and <span className='highlight'>PyTorch</span>.</p>
                <p>I'm also fascinated by <span className='highlight'>Low-level Programming</span>. I don't just want to build scripts that work, I want to understand how they work underneath the hood.</p>
                <p>I'm constantly pushing myself to learn <span className='highlight'>new technologies</span> beyond the classNameroom.</p>
            </div>
        </section>
    );
}

export default About;