import {React, useRef} from 'react'



function EjemplouseRef () {
   const sobreEscribir = useRef(null);
     const referencia = useRef(null);
     const escribirNuevo = () => {
       sobreEscribir.current.innerHTML = referencia.current.value;
     };
   
     const escribirNombre = () => {
       alert("Hola " + referencia.current.value);
     };
  return (
    <div>
        {/* Explicación del contenido*/}
      <br />
      <h1>Uso del useRef</h1>
      <p>
        El useRef, permite acceder a la información del DOM sin necesidad de
        hacer uso del (document.getElementById("id")), que se usa normalmente
        Para ello, solo debemos:
        <ol>
          <li>
            Importar el Hook useRef al inicio del doc, así.{" "}
            <p className="cp">{`import {useRef} from 'react';`} </p>
          </li>
          <li>
            Usar el <p className="cp">{`ref={nombreReferencia}`}</p> en lugar de
            un <p className="cp">{`id="nombreReferencia"`}</p>
          </li>
          <li>
            Agregamos una constante antes del return(), contendrá el nombre de
            la referencia.
            {`** const nombreReferencia = useRef(null); `} <br />
          </li>
          <li>
            Para usar la referencia, debemos incluir el nombre de la referencia
            entre las llaves {`{}`}, junto con el {`[.. current.value ..]`},
            deberá quedar así {`[.. nombreReferencia.current.value ..]`}
          </li>
        </ol>
      </p>

      <h2>Ejemplo useRef</h2>
      <p>
        Queremos tomar el valor del input, y lanzar un alert() con el valor
        digitado.
      </p>

      <p className="codigo">
        <ul>
          <li>{`import {useRef} from 'react';`}</li>
          <br />
          <li>{`function App() { `}</li>
          <br />
          <li>const referencia = useRef(null);</li>
          <li>{`const funcion=()=>{ alert("Hola" + {referencia})}`}</li>
          <br />
          <li> {`return(`}</li>
          <br />
          <li>{`<label> Escriba su nombre </label>`}</li>
          <li>
            {`<input type="text" ref={referencia}/>`} **Aplicamos la referencia
            al input
          </li>
          <li>{`<button onClic={funcion}>Saludar! </button>`}</li>
          <br />
          <li>{`)}`}</li>
        </ul>
      </p>

      {/* inicio del ejercicio real*/}
      <h3>Este sería el resultado</h3>

      <label>Escriba su nombre </label>
      <input text="" ref={referencia} />
      <button onClick={escribirNombre}>Saludar!</button>
      <br />
      <p>
        {" "}
        Ahora, crearemos un botón, para escribir dentro de un div, el valor
        difitado.
      </p>
      <p className="codigo">
        <ul>
          <li>{`const nuevoValor = useRef(null); `}</li>
          <br/>
          <li> {`const sobreEscribir =() => {`}</li>          
          <li>{`nuevoValor.current.innetHTML = referencia.current.value;`}</li>
          <li>{`}`}</li>
          <br/>
          <li>{`<button onClick={sobreEscribir}>Escribir</button>`} </li>          
          <li>{`<div ref={nuevoValor} XXXX <div/>`}</li>
          <br/>
        </ul>
      </p>
      <h3>Este sería el resultado</h3>
      <button onClick={escribirNuevo}>Escribir</button>
      <div ref={sobreEscribir}>XXXX</div>
      <h1>Uso del useState</h1>
    </div>
  )
}


export default EjemplouseRef;