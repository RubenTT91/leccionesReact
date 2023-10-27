import React from "react";
import "../routes/useRef.css";

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
      <h2>Modo de uso</h2>
      <ol>
        <li>Al igual que el useRef, debemos importarlo <p className="cp">{`import {useState , useRef} from 'react';`}</p></li>
        <li></li>
      </ol>

    </div>
  );
}

export default useState;
