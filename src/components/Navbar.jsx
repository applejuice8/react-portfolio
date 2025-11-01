function Navbar() {
    return (
        <nav>
            <div id="logo">C</div>

            <div id="hamburger" class="pointer">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul id="nav-links">
                <li><a href="#home" class="nav-link pointer active">Home</a></li>
                <li><a href="#about" class="nav-link pointer">About</a></li>
                <li><a href="#skills" class="nav-link pointer">Skills</a></li>
                <li><a href="#projects" class="nav-link pointer">Projects</a></li>
                <li><a href="#certs" class="nav-link pointer">Certs</a></li>
                <li><a href="#contact" class="nav-link pointer">Contact</a></li>
            </ul>

            <div id="nav-indicator"></div>
        </nav>
    )
}

export default Navbar;