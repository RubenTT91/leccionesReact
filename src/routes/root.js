import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../index.css";

export const root = () => {
  return (
    <>
    
        <div id="sidebar">   
        <h1> Aprendizaje <a href="https://github.com/RubenTT91" target="blank">RubenchoTT91 </a></h1>
          <nav>
            <ul>
              <li>
                <Link to={`/leccion/LeccionUseRef`}>Use Ref</Link>
              </li>
              <li>
                <Link to={`/leccion/LeccionUseState`}>Use State</Link>
              </li>
              <li>
                <Link to={`/leccion/LeccionRoute`}>Route</Link>
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