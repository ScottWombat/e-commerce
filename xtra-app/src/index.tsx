import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';


const title = 'My Minimal React Webpack Babel Setup';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
root.render(
    <React.StrictMode>
      <App title="Xtra"/>
    </React.StrictMode>
);