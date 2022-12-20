// Fichero src/index.js (código nuevo)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import {HashRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  </React.StrictMode>
);