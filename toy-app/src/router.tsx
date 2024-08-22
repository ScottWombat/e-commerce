import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { HomePage } from 'src/page/home';
import { ErrorPage } from 'src/page/error';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [{
            index: true,
            element: <HomePage/>
        }]

    }
])