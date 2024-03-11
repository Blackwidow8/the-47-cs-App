import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Discover from  './pages/Discover.jsx'
import Account from './pages/Account.jsx'
import County from './pages/County.jsx'
import { AuthProvider } from "./components/context/authContext.jsx";

import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'
import Landing from './pages/Landing/Landing.jsx'


const paths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/landing",
    element: <Landing/>,
  },
  {
    path: "/discover",
    element:<Discover/>,
  },
  {
    path: "/account",
    element:<Account/>
  },
  {
    path:"/county",
    element:<County/>
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={paths} />
    </AuthProvider>
  </React.StrictMode>,
)
