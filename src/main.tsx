import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ExtensionProvider, ThemeProvider } from '@/context'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ExtensionProvider>
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>,
    </ThemeProvider>
  </ExtensionProvider>
)
