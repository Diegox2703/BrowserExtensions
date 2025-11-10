import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ExtensionProvider } from './context/ExtensionContext.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ExtensionProvider>
    <StrictMode>
      <App />
    </StrictMode>,
  </ExtensionProvider>
)
