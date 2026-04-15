import { useNavigate } from 'react-router-dom'
import './BackButton.css'

function BackButton({ section }) {
    const navigate = useNavigate()

    // Send router state to home
    function returnToSection() {
        navigate('/', {
            state: { scrollTo: section }
        })
    }

    return(
        <button className="pointer back-btn" onClick={returnToSection}>
            Return
        </button>
    )
}

export default BackButton