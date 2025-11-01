function Navbar() {
    return (
        <nav>
            <div id='logo'>C</div>

            <div id='hamburger' className='pointer'>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul id='nav-links'>
                <li><a href='#home' className='nav-link pointer active'>Home</a></li>
                <li><a href='#about' className='nav-link pointer'>About</a></li>
                <li><a href='#skills' className='nav-link pointer'>Skills</a></li>
                <li><a href='#projects' className='nav-link pointer'>Projects</a></li>
                <li><a href='#certs' className='nav-link pointer'>Certs</a></li>
                <li><a href='#contact' className='nav-link pointer'>Contact</a></li>
            </ul>

            <div id='nav-indicator'></div>
        </nav>
    );
}

export default Navbar;