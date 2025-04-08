import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Error404 from './Error404.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />,

  </StrictMode>,
)
