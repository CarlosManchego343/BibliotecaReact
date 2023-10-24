import React from 'react'
import ReactDOM from 'react-dom/client'

// Por el tipo de exportancion se usa la expresion entre corchetes
import { App } from './App.jsx'

// Al ser la funcion main del codigo se le pide que se renderize
// todo los elementos en el elemento HTML con id "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
