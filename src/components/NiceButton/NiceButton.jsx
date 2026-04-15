import './NiceButton.css'

function NiceButton({ link, isCenter, onClick, children }) {
    return(
        <a href={link} 
        target="_blank" 
        className={`button-link pointer ${isCenter ? 'center' : null}`}
        onClick={onClick}
        >
            {children}
        </a>
    )
}

export default NiceButton