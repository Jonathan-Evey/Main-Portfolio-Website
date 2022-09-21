import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Main from './Main'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Header />
      <Main />
    </>
  </React.StrictMode>
)
