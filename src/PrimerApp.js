// SFC ( state Functional Component ) -> HOOK
//Vamos a trabajr con Functional Component
//HAy que importar react para que funcione el import del component en el index.js
//short cut 'imr' and add  import React from 'react' on visual studio code 
import React from 'react'


const PrimeraApp = () => {
    // return <h1>Hola Mundo</h1>;
    //para el return el js debe retornar un objeto a la vez, no se pueden regresar estas dos cosas
    //return 
    // <h1>Hola Mundo</h1>
    // <p>Mi Primera App</p>;
    //con cambio de linea no funciona  - Si presiono enter, ya no funciona
    //PAra arreglaro se usan parenteisis ( ) y ponerlo en elemento root ya sea un div o cualquier otro
    return (
        <div>
            <h1>Hola Mundo</h1>
            <p>Mi Primera App</p>
        </div>
        );
}   

//Esperamos que devuelva HTML 
export default PrimeraApp;
//Despues veremos Custom Hooks 