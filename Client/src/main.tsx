import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='header'>    
      <h1>LOGIN</h1>
    </div>
    <App></App>
  </React.StrictMode>,
)
