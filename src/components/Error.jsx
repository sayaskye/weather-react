import React from 'react'
const Error = ({result}) => {
    return ( 
        <>
            <h1 className="text-center">Lo siento, ocurrio un error.</h1>
            <p className="text-center">Codigo de error: {result.cod}</p>
            <p className="text-center">Mensaje: {result.message}</p>
        </>
     );
}
 
export default Error;