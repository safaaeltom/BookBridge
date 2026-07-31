import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CountryProvider } from './Context/CountryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CountryProvider>
        <App />
      </CountryProvider>
    </BrowserRouter>
  </StrictMode>,
)