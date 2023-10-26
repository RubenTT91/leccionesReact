import React from 'react';
import '../routes/useState.css';
import dinkelberg from '../img/mqdefault.jpg';


function useState(){
  return (
    <div className="contenedorPrincipal">
        <p>Aqui vendría el useState si lo supiera manejar bien</p>
        <img src={dinkelberg} alt='dinkelberg'/>
        
    </div>
  )
}

export default useState;
