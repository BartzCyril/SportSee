import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {App} from "./App";
import "the-new-css-reset/css/reset.css";
import "./css/style.css"
import {Error} from "./components/Error.tsx";

const router = createBrowserRouter([
    {
        path: '/SportSee/',
        errorElement: <Error/>
    },
    {
        path: '/SportSee/:id',
        element: <App />,
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
