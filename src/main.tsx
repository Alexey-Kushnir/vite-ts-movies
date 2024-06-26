import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename='/vite-ts-movies'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
