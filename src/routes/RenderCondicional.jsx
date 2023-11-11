import React from 'react'
import "../routes/useRef.css";

function  RenderCondicional() {
  return (
    <div className='contenedorPrincipal'>
        <h1>Renderizado Condicional</h1>
        <p>Este renderizado condicional, puede ser útil para hacer un popUp. 
            Si la variable  <div className='cp'>{`isVisible`}</div> es false, 
            el contenido desaparecerá. </p>


    </div>
  )
}

export default  RenderCondicional;
