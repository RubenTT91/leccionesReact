import React from "react";
import "../routes/useRef.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="contenedorPrincipal">
      <h1>Props</h1>
      <p>
        Sirven para pasar información, de un componente a otro, en la
        construcción del los parámetros que queremos pasar, denerán ser
        relacionados en momento de su invocación, junto con una clave <br />
        <div className="codigo">
          <div>{`const App()=>{`}</div>
          <div>{`return (`}</div>
          <div>{`<div> Esta es la información del componente principal`}</div>
          <div>{`<ComponenteDestino claveUno="valor_clave">`}</div>
          <div>{`<div>`}</div>
          <div>{`)};`}</div>
        </div>
        Luego de esto, en la construcción del componente, debemos mencionar un
        "parámetro", por lo general se recomienda usar el concepto de props{" "}
        <br />
        <div className="cp">{`const ComponenteDestino(props){ (...)}`}</div>{" "}
        <br />
        Para usar la información que traemos en esa clave, solo debemos hacer
        una desestructuración apoyandonos en el código de JSX, de la siguiente
        manera
        <br />
        <div className="codigo">
          {`const ComponenteDestino(props){`} <br />
          {`return (`} <br />
          {`<div> El valor del props, es :  {props.claveUno}`} <br />
          {`)};`} <br />
        </div>
        Lo anterior nos dará como resultado, algo así, <br />
        <br />
        Esta es la información del componente principal <br />
        El valor del props, es : valor_clave.
      </p>
      <h2>Pasar varios parámetros</h2>
      <p>
        Tomando en cuenta el ejemplo anterior, solo debemos mencionar en el
        componente principal las claves y sus valores, asi: <br />
        <div className="codigo">

        <div>{`const App()=>{`}</div>
          <div>{`return (`}</div>
          <div>{`<div> Esta es la información del componente principal`}</div>
          <div>{`<ComponenteDestino claveUno="valor_clave" claveDos="valor_clave2" claveTres="valor_clave3">`}</div>
          <div>{`<div>`}</div>
          <div>{`)};`}</div>
        </div>

        Para el uso de estos parámetros, existen 2 formas. Una con un parametro y luego por puntos, acceder a las claves, asi: <br/>
        <div className="codigo">
            {`const ComponenteDestino(props){`}<br/>
            {`return (`}<br/>
            {`<div>`}<br/>
            {`El valor uno es : {props.claveUno}`}<br/>
            {`El valor dos es : {props.claveDos}`}<br/>
            {`El valor tres es : {props.claveTres}`}<br/>
            {`)};`}<br/>
        </div>
        La otra forma, es desestructurando el parámetro usando las llaves {`{}`} para todas las claves separadas por coma, así, 
        <div className="codigo">
            {`const ComponenteDestino({claveUno, claveDos, claveTres}}){`}<br/>
            {`return (`}<br/>
            {`<div>`}<br/>
            {`El valor uno es : {claveUno}`}<br/>
            {`El valor dos es : {claveDos}`}<br/>
            {`El valor tres es : {claveTres}`}<br/>
            {`)};`}<br/>
        </div>
      </p>
    </div>
  );
};
