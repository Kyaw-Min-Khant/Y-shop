import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StateContextProvider } from './Statecontext/StateContext'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </BrowserRouter>
);
