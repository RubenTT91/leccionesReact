import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../index.css";

export const root = () => {
  return (
    <>
    
        <div id="sidebar">   
        <h1> Aprendizaje de <a href="https://github.com/RubenTT91" target="blank"> RubenchoTT91 </a></h1>
          <nav>
            <ul>
              <li>
                <Link to={`/LeccionUseRef`}>Use Ref</Link>
              </li>
              <li>
                <Link to={`/LeccionUseState`}>Use State</Link>
              </li>
              <li>
                <Link to={`LeccionUseEffect`}>UseEffect</Link>
              </li>
              <li>
               <Link to={`/Componentes`}>Componentes</Link>
              </li>
              <li>
                <Link to={`LeccionRoute`}>Route</Link>
              </li>
              <li>
                <Link to={`Props`}>Props</Link>
              </li>
              <li>
                <Link to={`Render Condicional`}>Render Condicional</Link>
              </li>
              <li>
                <Link to={`Estilos parte 1`}>Estilos Parte #1</Link>
              </li>
              <li>
                <Link to={`Estilos Componentes`}>Estilos Parte #2 - Por componentes</Link>
              </li>
            </ul>
          </nav>
        </div>
    

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default root;
