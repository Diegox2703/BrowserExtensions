export interface ThemeProvierProps {
    children: React.ReactNode
}

export interface ThemeContext {
    isDark: boolean
    handleTheme: () => void
}