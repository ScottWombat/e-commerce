import React ,{ Suspense} from 'react'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom';
import App  from '../app';

import { ErrorPage, HomePage} from '../views'

const LazyCartPage = React.lazy(()=> import("../views/cart"))
const LazyProductsPage = React.lazy(()=> import("../views/products"))
import Products from "../views/products"
import CheckoutPage from 'app/views/checkout';
import ViewBag from 'app/views/bag';
import ProductList from 'app/views/products/mobile';
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
            {
                path: '/checkout1',
                element: <CheckoutPage/>
            },
            {
                path: '/viewbag',
                element: <ViewBag/>
            },
            {
                path: '/product_list/:catalog/:category',
                element: <ProductList/>
            },

        ]
    },{
        path: "/checkout",
        element:<CheckoutPage/>,
        errorElement: <ErrorPage/>,
    },
    
])