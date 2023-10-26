import PaginaError  from './error-page';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  createBrowserRouter,
   RouterProvider,    
  } from 'react-router-dom';
import Root from './routes/root';
import reportWebVitals from './reportWebVitals';
import LeccionUseRef from './routes/useRef';
import LeccionUseState from './routes/useState';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter ([
  {
    path: "/",
    element: <Root/>,
    errorElement: <PaginaError />,
    children: [
      {
        path: "leccionUseRef",
        element: <LeccionUseRef />,
      },
      {
        path: "leccionUseState",
        element: <LeccionUseState />,
      },
    ]
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();
