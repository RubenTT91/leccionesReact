import React from "react";
import "../routes/useRef.css";

function Components() {
  return (
    <div className="contenedorPrincipal">
      <h1>Componentes</h1>
      <p>
        son las partes de la interfaz visual. Los componentes deben iniciar con
        mayúsculas. Cada vez que un componente se renderizan, todas sus
        funciones se vuelven a crear, por lo tanto entre más funciones fuera del
        componente, mejor.
        <strong>
          El componente más importante, es el componente{" "}
          <div className="cp"> app</div>, que es el que inicializa toda la
          aplicación. </strong>{" "}
        <br />
        Los componentes deben devolver código JSX o null. y puedo generar
        cuantos componenes necesite mi proyecto, si los invoco dentro del proyecto,
        no es necesario importarlos <br/>
        <h3>Ejemplo</h3>
        <div className="codigo">
          {`const ComponenteUno =_ => {`}<br/>
          {`return ( ` } <br/>
          {`<div> Este es el componenteUno </div>`}<br/> 
          {`)};`}<br/> 
          <br/> 
          <br/> 
          {`cons App = _=> {`}<br/>
          {`return (`}<br/>
          {`<ComponenteUno />`}<br/>

        </div>
      </p>
      <ol>
        <p className="codigo">
          {`import React from 'react';`}
          {`import React from 'react'v;`}
        </p>
      </ol>
    </div>
  );
}

export default Components;
