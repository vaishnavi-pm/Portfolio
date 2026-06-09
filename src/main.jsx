import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/theme.css'
import { ThemeProvider } from './context/ThemeContext'
import { AnalyticsProvider } from './analytics'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <AnalyticsProvider>
          <App />
        </AnalyticsProvider>
      </Router>
    </ThemeProvider>
  </StrictMode>,
)
