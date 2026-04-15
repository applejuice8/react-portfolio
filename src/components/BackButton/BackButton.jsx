import './BackButton.css'

function BackButton({ text, onClick }) {
    return(
        <button className="pointer back-btn" onClick={onClick}>
            {text}
        </button>
    )
}

export default BackButton