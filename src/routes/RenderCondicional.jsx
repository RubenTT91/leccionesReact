import React from "react";
import "../routes/useRef.css";

function RenderCondicional() {
  return (
    <div className="contenedorPrincipal">
      <h1>Renderizado Condicional</h1>
      <p>
        Este renderizado condicional, puede ser útil para hacer un popUp. Si la
        variable <div className="cp">{`isVisible &&`}</div> es false, el
        contenido desaparecerá.{" "}
        
      </p>
      <br />
      <h3>¿Como se usa? </h3>
      <ol>
        <li>
          Lo primero que tenemos que hacer, es dentro de la funcion del
          componente, agregamos una variable donde ingresaremos la condicional;
        </li>

        <div className="codigo">
          <br />
          {`function condicional{`}
          <br />
          {`const variableCondicional =false;`}
          <br />
          {`return (`}
          <br />
          {`<div> codigo <div>;`}
          <br />
          {`)};`}
          <br />
          <br />
        </div>

        <li>
          Luego de agregar la variable que funcionará como condicional,
          agregaremos un operador condicional ternario{" "}
          <div className="cp">
            {" "}
            {`variable && ? <p> siVerdadero </p> : <p> siFalso </p>;`}
          </div>
        </li>

        <div className="codigo">
          <br />
          {`function condicional{`}
          <br />
          {`const variableCondicional =false;`}
          <br />
          {`return (`}
          <br />
          {`{ variable && ? <p> siVerdadero </p> : <p> siFalso </p> };`}
          <br />
          {`)};`}
          <br />
          <br />
        </div>
      </ol>

      <h1>Ejercicio</h1>
      <p>En el siguiente ejercicio, crearemos una caja de texto, y a través caja de texto aplicaremos un control de estados </p>


      
    </div>
  );
}

export default RenderCondicional;
