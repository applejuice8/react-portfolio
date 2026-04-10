import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [isLight, setIsLight] = useState(false)

    function toggleTheme() {
        document.documentElement.classList.toggle('light-mode')
        setIsLight(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={{ isLight, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}
