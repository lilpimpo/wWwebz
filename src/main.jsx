import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router'
import App from './App.jsx'
import Lobby from './CMPs/Conteniggio/Lobby.jsx'
import './index.css'

//crea routa
const Router = createBrowserRouter([
  {
    path:'/',
    element:<Lobby/>,
    errorElement:<h3>╯︿╰ **!** ⊙﹏⊙∥</h3>
  },
  {
    path:'/Basei',
    element:<App/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} / >
  </StrictMode>,
)
