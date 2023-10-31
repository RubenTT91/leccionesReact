import React, { useRef, useState } from "react";
import "../routes/useRef.css";

function LeccionseState() {
  let variableNueva = 4;   
  const refInput = useRef(null);
  const refInput2 = useRef(null);
  const cambiarValor = () => {
    alert("Valor insertado al Div = " + refInput.current.value);
    variableNueva = refInput.current.value;
  };
  {/**CON USETATE */}

  const [variableNueva2, setA] = useState(4);
  const cambiarValorUseState =()=>{
    alert("Valor insertado al Div = " + refInput2.current.value);
    setA(refInput2.current.value);
  }

  return (
    <div className="contenedorPrincipal">
      <h1>useState</h1>
      <p>
        El useState, permite la renderización de manera automática de aquellas
        variables que sufren un cambio. Por ejemplo Si tenemos una variable{" "}
        <div className="cp">let variable=4;</div>. Cuando usamos una función,
        que permita cambiar esa variable a través del método, a pesar de que se
        haga el cambio a la variable, no se va a renderizar el nuevo valor.{" "}
        <div className="cp">{`const function cambioarNumero =()=>{ variable = 10 }`}</div>{" "}
        <br />
        El nuevo valor de variable, será 10, pero no se va a ver reflejado.
      </p>
      <br />
      <h2>Ejemplo</h2>
      <p>
        Tengo la siguiente varialbe <div className="cp">let variable=5;</div>, y
        con el siguiente botón quiero cambiar a un nuevo valor el cual voy a
        digitar en el input adjunto{" "}
      </p>

      <input type="text" ref={refInput} />
      <br />
      <button onClick={cambiarValor}>Cambiar Valor</button>
      <br />
      <br />
      <div className="cp">Variable = {variableNueva}</div>
      <p>
        {" "}
        A pesar de haber actualizado el valor de la variable, no se renderiza el
        nuevo valor.{" "}
      </p>
      {/* Este segmento esta enfocado al modo de uso del useState*/}
      <br />

      <h2>Modo de uso</h2>
      <ol>
        <li>
          Al igual que el useRef, debemos importarlo{" "}
          <p className="cp">{`import {useState , useRef} from 'react';`}</p>
        </li>
        <li>Luego, definimos el estado <div className="cp">{`const [variable, funcion_cambio_estado] =useState(valor_inicial);`}</div> </li>
        <li>Ahora lo que queda es llamar esta función, e insertar el nuevo valor</li>
        <li><p className="cp"> {`const [variableNueva, cambioVariable] =useState(null);`}</p></li>
      </ol>

      <input type="text" ref={refInput2} />
      <button onClick={cambiarValorUseState}>Cambiar Valor</button>
      <br />
      <br />
      <div className="cp">Variable con UseState = {variableNueva2}</div>
      
    </div>
  );
}

export default LeccionseState;
