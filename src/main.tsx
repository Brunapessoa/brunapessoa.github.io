import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './context/ThemeContext.tsx'
import LanguageProvider from './context/LanguageContext.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop/>
          <App />
        </BrowserRouter>      
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
