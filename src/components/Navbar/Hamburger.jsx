import './Hamburger.css'

function Hamburger({ isExpanded, onClick }) {
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