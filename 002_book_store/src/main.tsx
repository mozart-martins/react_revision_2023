import React from 'react'
import ReactDOM from 'react-dom/client'
import Booklist from './Booklist'

import './assets/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Booklist />
  </React.StrictMode>,
)
