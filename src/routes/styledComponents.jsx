import React from "react";
import "../routes/useRef.css";
import {Cuadrado} from '../styled.js';

function styledComponents() {
  return (
    <div>
      <h1>Los Estilos por compenentes</h1>
      <p>
        Los estilos que se asignan por componente, permite instalar primero un
        paquete que contiene la información de los componentes para luego ser
        importados lo primero, es instalar el paquete{" "}
        <div className="cp"> npm i styled-components</div>. <br />
        Luego de esto, podemos crear un archivo con extensión JS, en este caso,
        lo llamaré de la siguiente manera, <div className="cp"> styled.js</div>        
        <br/>
        <br/>
        Luego de creado el archivo, importaremos la biblioteca con el siguiente código : <div className="cp">import styled from 'styled-components';</div>
        <br />
        Paso seguido a la importación de la biblioteca, debemos crear los "elementos" y luego exportarlos, ejemplo, vamos a crear un cuadro
        y luego lo exportaremos, el nombre lo almacenamos en una constante; 
        <br />
        <div className="codigo"> export const cuadro = styled.div `<br/>
        width : 70px;<br/>
        heigth : 70px;<br/>
        background-color : red;<br/>
        `;</div>        
        <br />
        Luego de crear el cuadro rojo y exportarlo, lo invocamos en otro archivo o donde se requiera usar ; 

        <div className="codigo">{`import {Cuadrado} from './styled'; `}<br/>
        ... <br/>
        {`<Cuadrado/>`}        
        <br />
        Se vería de la siguiente manera
        <Cuadrado/>
        </div>
      </p>
    </div>
  );
}

export default styledComponents;
