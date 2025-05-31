import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <ThemeProvider>
      <App />
    </ThemeProvider>

  </BrowserRouter>
)
