import React ,{ Suspense} from 'react'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom';
import { App } from './App';
import { HomePage } from 'src/page/home';
import { ErrorPage } from 'src/page/error';

const LazyCartPage = React.lazy(()=> import("./page/cart/cart"))
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [{
            index: true,
            element: <HomePage/>
        },
        {
            path: '/cart',
            element: <LazyCartPage />

        }
    ]

    }
])