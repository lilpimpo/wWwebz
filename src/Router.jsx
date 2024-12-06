import App from './App.jsx'
import Lobby from './CMPs/Conteniggio/Lobby.jsx'
import { createBrowserRouter } from "react-router";
//crea routa
export const Routeria = createBrowserRouter([
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