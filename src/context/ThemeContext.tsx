import { PropsWithChildren, createContext, useContext, useState } from 'react'

interface ThemeContextType {
    isLight: boolean
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: PropsWithChildren) {
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
    const context = useContext(ThemeContext)
    if (!context) throw new Error('useTheme must be used inside ThemeProvider')
    return context
}
