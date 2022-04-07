import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

function StartApp() {
  return (
    <Router>
      <App/>
    </Router>
  )
}

const container = document.getElementById('root') as HTMLDivElement
const root = ReactDOM.createRoot(container)
root.render(<StartApp/>)
