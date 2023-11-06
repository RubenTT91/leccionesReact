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
          aplicación.{" "}
        </strong>
        <br />
        Los componentes deben devolver código JSX o null. y puedo generar
        cuantos componenes necesite mi proyecto, si los invoco dentro del
        proyecto, no es necesario importarlos <br />
        <br />
        {/**1. Como usar el componente?
         *
         *
        */}
        <h2>¿Como usar un componente?</h2>
        <p>
          Como bien se sabe, un componente puede devolver o null o código JSX.
          Por esto, es necesario importar react en el componente de la siguiente
          manera <div className="cp">{`import React from 'react'; `} </div>
          luego de construir el componente,{" "}
          <div className="cp">{` const MyComponent() =>{<div>Code</div>>} `}</div>{" "}
          finalmente, le daremos la instrucción de exportar
          <div className="cp">{` export default MyComponente; `}</div>
        </p>
        <div className="codigo">
          {`import React from 'react';`}<br /><br />
          {`const Componente =_ => {`}<br />          
          {`return ( `} <br />
          {`<div>Este es el componenteUno </div>`}<br />
          {`)};`}<br />
          {`export default Componente;`}<br />

          </div>
        {/**2. Usar varios componentes
         *
         *
         *
        */}
        <h2>Uso de varios componentes de diferentes ficheros</h2>
        <p>
          Para poder usar varios componentes, es necesario identificar si estan
          en el mismo o en diferentes ficheros Si esta en el mismo archivo,
          podremos usar el componente, sin necesidad de un{" "}
          <div className="cp">export import</div><br />
        </p>
        <div className="codigo">
          <br />
          {`const MyComponente()=>{<div>Mi componente Uno</div>}`}< br/>< br/>
          {`const MyComponenteDos()=>{<div>Mi componente Dos</div>}`}< br/>< br/>
          {`const MyComponenteTres()=>{<div>Mi componente Tres</div>}`}< br/>< br/>
          {`const MyComponentePrincipal()=>{ `}< br/>
          {`return (`}< br/>
          {`<div>Este es el componente Principal</div>`}< br/>
          {`<MyComponente/>`}< br/>
          {`<MyComponenteDos />`}< br/>
          {`<MyComponenteTres />`}< br/>         
          
          {`)};`}< br/>< br/>
        </div>
          <p>
            Como resultado tendríamos lo siguiente: <br/><br/>

            Este es el componente Principal <br/>
            Mi componente Uno <br/>
            Mi componente Dos <br/>
            Mi componente Tres<br/>
            </p>          
          <br />
          <br />
      
        <div>
          Ahora, en el mismo fichero, podemos usar otro componente, e incluso
          invocar el componente anterior{" "}
        </div>
        <div className="codigo">
          {`cons App = _=> {`}
          <br />
          {`return (`}
          <br />
          {`<div>`}
          <br />
          {`<ComponenteUno /> /** Estamos invocando el primer componente*/`}
          <br />
          {`<div>Y aca viene codigo del componente APP</div>`}
          {`<div> `}
          <br />
        </div>
        <h3>Resultado</h3>
        <div>El resultado de este ejercicio, daría</div>
      </p>

      <p className="codigo">
        {`Este es el componenteUno`}
        {`Y acá viene el codigo del componente APP;`}
      </p>
      <h2>Como importarlo</h2>
    </div>
  );
}

export default Components;
