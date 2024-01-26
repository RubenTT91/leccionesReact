import React from "react";
import { useRef, useState } from "react";
import "../routes/useRef.css";

function RenderCondicional() {
  // eslint-disable-next-line no-lone-blocks
  {/**Constante para el ejercicio de Renderizado condicional referencia del input y el del valor que se debe renderizar */}
  const refInput = useRef(null);

  // eslint-disable-next-line no-lone-blocks
  {/**Aquí definimos el useState*/}

  const [condicional=false, setE] = useState("");


  // eslint-disable-next-line no-lone-blocks
  {/**Acá definimos el useState */}
  const eventoCambio = () => {
    setE( refInput.current.value);
  };

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
      <p>
        En el siguiente ejercicio, crearemos una caja de texto, y a través caja
        de texto aplicaremos un control de estados{" "}
      </p>
      <button onClick={eventoCambio}>cambiar</button>
      <br />
      <input type="text" ref={refInput} />
      <br />
      <p className="cp">{condicional}</p>
      <br />
      <br />
      {condicional ? <p>El valor a cambiado a TRUE, por ente se refleja este parrafo</p> :<p>Ahora el valor es FALSE, por eso se renderiza este parrafo</p>}
    </div>
  );
}

export default RenderCondicional;
