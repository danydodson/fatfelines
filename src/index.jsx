import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/globals.css'
import App from './App'
import vitals from './utils/vitals'
import * as serviceWorker from './service-worker-reg'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

serviceWorker.register()

vitals(console.log)