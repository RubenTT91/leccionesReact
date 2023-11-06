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
        <ol>
          <li>
            Como bien se sabe, un componente puede devolver o null o código JSX.
            Por esto, es necesario importar react en el componente de la
            siguiente manera <br />
            <div className="cp">{`import React from 'react';`} </div>
            <br />
          </li>
          <li>
            luego, podremos de construir el componente,{" "}
            <div className="cp">{` const MyComponent() =>{<div>Code</div>>}`}</div>
            {"  "}
          </li>
          <li>
            finalmente, le daremos la instrucción de exportar si deseamos usarlo
            en otros ficheros
            <div className="cp">{` export default MyComponente;`}</div>
          </li>
        </ol>
        <div className="codigo">
          {`import React from 'react';`}
          <br />
          <br />
          {`const Componente =_ => {`}
          <br />
          {`return ( `} <br />
          {`<div>Este es el componenteUno </div>`}
          <br />
          {`)};`}
          <br />
          {`export default Componente;`}
          <br />
        </div>
        {/**2. Usar varios componentes
         *
         *
         *
         */}
        <h2>Uso de varios componentes en un mismo fichero</h2>
        <p>
          Para poder usar varios componentes dentro de un mismo fichecho,
          podremos usarlo sin importarlo, solo será necesario invocarlo con el
          nombre, en la sección que lo vamos a necesitar, basta con nombrarlo
          con código JSX <div className="cp">{`<Nombre_Componente />`}</div>
        </p>
        <h3>Ejemplo</h3>
        <div className="codigo">
          <br />
          {`const MyComponente()=>{<div>Mi componente Uno</div>}`}
          <br />
          <br />
          {`const MyComponenteDos()=>{<div>Mi componente Dos</div>}`}
          <br />
          <br />
          {`const MyComponenteTres()=>{<div>Mi componente Tres</div>}`}
          <br />
          <br />
          {`const MyComponentePrincipal()=>{ `}
          <br />
          {`return (`}
          <br />
          {`<div>Este es el componente Principal</div>`}
          <br />
          {`<MyComponente/>`}
          <br />
          {`<MyComponenteDos />`}
          <br />
          {`<MyComponenteTres />`}
          <br />
          {`)};`}
          <br />
          <br />
        </div>
        <p>
          Como resultado tendríamos lo siguiente: <br />
          <br />
          Este es el componente Principal <br />
          Mi componente Uno <br />
          Mi componente Dos <br />
          Mi componente Tres
        </p>
        {/**Exportar un componente a otro fichero */}

        <p>
          Ahora siguiendo el ejemplo anterior, queremos invocar un componente a
          otro fichero, lo primero que debemos hacer es exportarlo, para
          exportarlo por defecto, lo podemos hacer sin necesidad de nombrarlo{" "}<br />
          Lo que haremos será crear el componente a exportar como ya se ha mencionado, <br />
          Y al final, daremos la opción de exportar junto con el código, <div className="cp"> {` export default ComponentExt()=>{<div>Export por defecto<div/>}`}</div> <br />. 
          <br/>
          Ahora solo debemos importarlo en el fichero destino:
        </p>

        <div className="codigo">
          {`import ComponentExterno from 'ubicacion/ComponentExt';`}
          <br />
          <br />
          {`const MyComponente()=>{<div>Mi componente Uno</div>}`}
          <br />
          <br />
          {`const MyComponenteDos()=>{<div>Mi componente Dos</div>}`}
          <br />
          <br />
          {`const MyComponenteTres()=>{<div>Mi componente Tres</div>}`}
          <br />
          <br />
          {`const MyComponentePrincipal()=>{ `}
          <br />
          {`return (`}
          <br />
          {`<div>Este es el componente Principal</div>`}
          <br />
          {`<MyComponente/>`}
          <br />
          {`<MyComponenteDos />`}
          <br />
          {`<MyComponenteTres />`}
          <br />
          {`<ComponentExt />`}
          <br />
          {`)};`}
          <br />
          <br />
        </div>
        <p>
          Como resultado tendríamos lo siguiente: <br />
          <br />
          Este es el componente Principal <br />
          Mi componente Uno <br />
          Mi componente Dos <br />
          Mi componente Tres <br />
          Export por defecto <br />
        </p>
      </p>

  
    </div>
  );
}

export default Components;
