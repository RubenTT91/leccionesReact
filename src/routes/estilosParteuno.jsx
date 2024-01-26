import React from 'react'
import "../routes/useRef.css";


function EstilosParteuno()
{

  return (
    <div className="contenedorPrincipal">
    <h1>Estilos desde la etiqueta</h1>
    <p>
       La aplicación de los estilos desde las etiquetas, no son las mejores prácticas, debido a que 
       por cada etiqueta se debe agregar el atributo y su valor, lo cual hace tedioso y muy dificil 
       de mantener.
       <br/>
       Para poder aplicar los estilos de esta manera, tomaremos un div y en el encabezado escribiremos
       los atributos. NOTA: si son varios, los podremos separar por coma (,). 
       <br/>
       <div className='codigo'>  {`<div style={{backgroundcolor:"red", fontSize="1rem">`}<br/>
       {`<h1> Esto es lo esta dentro del div con el estilo </h1>`}<br/>
       {`</div>`}
       </div>
       El resultado sería  el siguiente: 

       <div style={{backgroundColor:"red", fontSize:"1rem"}}>
        <h1>Esto es lo que esta dentro del div con el estilo</h1>
       </div>
       <br/>
       <h2>Estilos como constantes</h2>
       
       <p>Nuevamente, a pesar de que no es una buena práctica, tambien podemos dejar los estilos como 
        constantes. Para ello, creamos una constante antes del (return) e incluiremos las propiedades. 
        Para replicar el ejercicio anterior, sería de la siguiente manera.         
        </p>

       <div className='codigo'>
       {`const divStyles = {backgroundcolor:"red", fontSize="1rem";`}<br/>
       {`return (`}<br/>
       {`<div styles={divStyles}>`}<br/>
       {`<h1> ESto es lo que esta dentro del div con el estilo </h1>`}<br/>
       {`</div>`}
       </div>      
       </p>
       <p>Finalmente, tambien es posible importar los estilos desde una hoja de JS, 
        para ello solo tendremos que: 
        <ol>
            <li>Crear el archivo con extensión JS</li>
            <li>Exportamos por default  la spropiedades <div className='cp'> {`export default {backgroundcolor:"red", fontSize="1rem"};`} </div></li>
            <li>Luego importamos el objeto en el archivo donde lo vamos a usar 
            <div className='cp'> {`import NombreVariable from './archivoJS';`} </div>
            </li>
            <li>Finalmente, agregamos la variable en el DIV que vayamos a aplicar los estilos
            <div className='cp'> {`<div styles={NombreVariable}> ... </div>;`} </div>
            </li>
        </ol>
       </p>



       
    
    </div>
    
  )
}

export default EstilosParteuno;