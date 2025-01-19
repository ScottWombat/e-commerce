import React ,{ Suspense} from 'react'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom';
import { App } from '../app';
import { ErrorPage, HomePage} from '../views'

const LazyCartPage = React.lazy(()=> import("../views/cart"))
const LazyProductsPage = React.lazy(()=> import("../views/products"))
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/home',
                element: <HomePage/>
            },
            {
                path: '/cart',
                element: <LazyCartPage/>
            },
            {
                path: '/products/:catalog/:category',
                element: <LazyProductsPage/>
            },

        ]
    }
])