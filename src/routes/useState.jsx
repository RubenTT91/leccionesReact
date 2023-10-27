import React from "react";
import "../routes/useRef.css";
import dinkelberg from "../img/mqdefault.jpg";

function useState() {
  return (
    <div className="contenedorPrincipal">
      <h1>useState</h1>
      <p>
        El useState, permite la renderización de manera automática de aquellas
        variables que sufren un cambio. Por ejemplo Si tenemos una variable{" "}
        <div className="cp">let variable=4;</div>. Cuando usamos una función,
        que permita cambiar esa variable a través del método tradicional, a
        pesar de que se haga el cambio, el nuevo valor no se va a renderizar.{" "}
        <div className="cp">{`const function cambioarNumero =()=>{ variable = 10 }`}</div> <br/>
        El nuevo valor de variable, será 10, pero no se va a ver reflejado. 
      </p>
    </div>
  );
}

export default useState;
