import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import { router } from './app/router';
import { store } from './app/store';
import GlobalStyle from 'app/styles/global';
import * as serviceWorker from './serviceWorker';
import reportWebVitals  from './reportWebVitals';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
root.render(
  <Provider store={store}>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </Provider>
    /*
    <React.StrictMode>
        <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  */
);

//serviceWorker.register();
//reportWebVitals((metric) => {
//  console.log(metric);
//});