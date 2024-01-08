import React from 'react'
import ArticlesListes from './components/ArticlesListes'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes/Routes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
