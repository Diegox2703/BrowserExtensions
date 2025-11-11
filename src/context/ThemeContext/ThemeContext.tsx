import { createContext, useContext, useEffect, useState } from "react";
import type { ThemeContext, ThemeProvierProps } from "./theme-context.types";

const ThemeContext = createContext<ThemeContext | undefined>(undefined)

export const ThemeProvider = ({ children }: ThemeProvierProps) => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            setIsDark(true)
        }
    }, [])

    const handleTheme = () => {
        const HTMLElement = document.documentElement
        HTMLElement.classList.toggle('dark')
        setIsDark(!isDark)

        if (HTMLElement.classList.contains('dark')) return localStorage.setItem('theme', 'dark')

        localStorage.setItem('theme', 'light')
    }

    return (
        <ThemeContext.Provider value={{ isDark, handleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) throw new Error('useTheme must be used inside of an ThemeProvider')

    return context
}