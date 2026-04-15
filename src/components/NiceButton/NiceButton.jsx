import './NiceButton.css'

function NiceButton({ link, isCenter, onClick, text, children }) {
    return(
        <a href={link} 
        target="_blank" 
        className={`button-link pointer ${isCenter ? 'center' : null}`}
        onClick={onClick}
        >
            {text || children}
        </a>
    )
}

export default NiceButton