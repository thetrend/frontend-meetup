import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from './App.tsx'
import Error from './Error'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/:displayName?',
    element: <App />,
    errorElement: <Error />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
