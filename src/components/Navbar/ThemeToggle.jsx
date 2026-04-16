import { useTheme } from '../../context/ThemeContext'
import './ThemeToggle.css'

function ThemeToggle() {
    const { isLight, toggleTheme } = useTheme()

    return(
        <button id="theme-toggle" className="pointer" onClick={toggleTheme}>
            <i className={`fa-solid ${isLight ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
    )
}

export default ThemeToggle