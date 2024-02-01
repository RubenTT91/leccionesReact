import PaginaError  from './error-page';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  createBrowserRouter,
   Form,
   RouterProvider,    
  } from 'react-router-dom';
import Root from './routes/root';
import reportWebVitals from './reportWebVitals';
import LeccionUseRef from './routes/useRef';
import LeccionUseState from './routes/useState';
import LeccionUseEffect from './routes/useEffect';
import Components from './routes/components';
import Props from './routes/Props';
import RenderCondicional from './routes/RenderCondicional';
import EstilosParteuno from './routes/estilosParteuno';
import EstilosPartedos from './routes/styledComponents';
import {Rutas} from './routes/rutas';



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
      {
        path: "rutas",
        element: <Rutas />,
      },
      {
        path: "leccionUseEffect",
        element: <LeccionUseEffect />,
      },
      {
        path: "Componentes",
        element: <Components />,
      },
      {
        path: "Props",
        element: <Props />,
      },
      {
        path: "Render Condicional",
        element: <RenderCondicional />,
      },
      {
        path: "Estilos parte 1",
        element: <EstilosParteuno />,
      },
      {
        path: "Estilos Componentes",
        element: <EstilosPartedos />,
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
