import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyled } from './GlobalStyled'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
)
