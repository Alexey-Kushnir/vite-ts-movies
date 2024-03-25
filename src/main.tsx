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

// import React from 'react';
// import { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from './components/App';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <StrictMode>
//     <BrowserRouter basename='/goit-react-hw-05-movies-ts'>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );
