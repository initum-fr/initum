import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './index.css'

import { SpeedInsights } from '@vercel/speed-insights/react'

// local imports
import Home from './pages/Home'
import Root from './routes/Root'
import Error from './pages/Error'
import Contact from './pages/Contact'
import About from './pages/About'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" />,
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'about',
                element: <About />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <SpeedInsights />
    </React.StrictMode>
)
