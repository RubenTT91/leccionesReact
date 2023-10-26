import React from 'react'
import { useRouteError } from 'react-router-dom';

function errorPages(){

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const error = useRouteError();
    console.error(error);

  return (
    <div id="error-page">
        <h1> Mierda, lo siento</h1>
               <p>Devuelvase coma callado todo bien.. </p>
        <p>
            <i> {error.statusText || error.message}</i>
        </p>
    </div>
  )
}

export default errorPages;