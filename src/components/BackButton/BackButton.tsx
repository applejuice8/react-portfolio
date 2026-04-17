import { NavigateFunction, useNavigate } from 'react-router-dom'
import './BackButton.css'

interface BackButtonProps {
    section: string
}

function BackButton({ section }: BackButtonProps) {
    const navigate: NavigateFunction = useNavigate()

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