import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './store/auth';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <AuthProvider>
        <HelmetProvider>
         <App />
        </HelmetProvider>
      </AuthProvider>
    </BrowserRouter>
  // <React.StrictMode>
  // </React.StrictMode>
);

reportWebVitals();
