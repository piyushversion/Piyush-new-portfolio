import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  

  <BrowserRouter>
      <App />
  </BrowserRouter>
  
)
