import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import Home from './Pages/Home'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)