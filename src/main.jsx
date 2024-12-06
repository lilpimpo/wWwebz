import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Routeria } from './Router'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routeria} / >
  </StrictMode>,
)
