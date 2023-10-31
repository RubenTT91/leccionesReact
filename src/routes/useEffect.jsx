import "../routes/useRef.css";
import { React, useState, useRef, useEffect } from "react";

function LeccionUseEffect() {
  // eslint-disable-next-line no-lone-blocks
  {
    /**Se definen los Hooks useState, Ref y Effects  en el siguiente bloque*/
  }

  const referenciaInput = useRef(null);
  const referenciaDiv = useRef(null);
  const [valor, setA] = useState('--');

  const CambiarValor = () => {
    setA(referenciaInput.current.value);
  };

  useEffect(() => {
    alert("Se hizo un cambio");
  }, [valor]);

  return (
    <div>
      <h1>UseEffect</h1>
      <p>
        El <div className="cp">useEffec</div>, permite ejecutar una accioón,
        cada vez que hay un cambio de estado. Para este ejemplo, seguiremos
        usando el useState, y lo vamos importar como en la lección pasada.{" "}
      </p>
      <p>
        Haremos un cambio de una variable a través de un useState y la
        referencia obtenida desde un Imput, y a través de un alert,
        notificaremos el total de cambios realizados
      </p>
      <br />
      <input type="text" ref={referenciaInput} />
      <button onClick={CambiarValor}>Cambiar Valor</button>
      <br />
      <div ref={referenciaDiv}>{valor}</div>

      <h2>Explicación del código</h2>
      <ol>
        <li>
          Primero importamos el useEffec{" "}
          <p className="cp">{`import {useEffect} from 'react';`}</p>
        </li>
        <li>
          Luego agregamos un useState para monitorear los cambios de la variable{" "}
          <p className="cp">{`valor`}</p> <br />
          <p className="codigo">
            {`const [valor, setA] = useState('--');`}
            <br />
            {`const referenciaInput = useRef(null);`}
            <br />
            {`const referenciaDiv = useRef(null);`}
            <br />
            <br />
            {`const CambiarValor =()=>{ `} <br />
            {`setA(Referencia_delInput)`} <br />
            {`}`}
            <br />
            {`useEffec (()=>{`}
            <br />
            {` alert("Se hizo un cambio") `}
            <br />
            {`, [valor]`}
            <br />
            {`})`}
            <br />
            <br />
            {`<input type="text" ref={referenciaInput} />`} <br />
            <br />
            {`<button onClick={CambiarValor}>Cambiar Valor</button>`}<br/>
            <br />
            {`<div ref={referenciaDiv}>{valor}</div>`}<br/>
          </p>
        </li>
      </ol>
    </div>
  );
}

export default LeccionUseEffect;
