import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './sass/main.scss'
import { router } from './router'
import UserProvider from './context/UserContext'
import PokemonProvider from './context/PokemonContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider> 
      <PokemonProvider>
        <RouterProvider router={router} />
      </PokemonProvider>
    </UserProvider>
  </React.StrictMode>,
)