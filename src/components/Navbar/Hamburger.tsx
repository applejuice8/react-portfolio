import './Hamburger.css'

interface HamburgerProps {
    isExpanded: boolean
    onClick: () => void
}

function Hamburger({ isExpanded, onClick }: HamburgerProps) {
    return(
        <div id="hamburger" 
        className={`pointer ${isExpanded ? 'active' : ''}`} 
        onClick={onClick}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger