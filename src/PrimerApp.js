// SFC ( state Functional Component ) -> HOOK
//Vamos a trabajr con Functional Component
//HAy que importar react para que funcione el import del component en el index.js
//short cut 'imr' and add  import React from 'react' on visual studio code 
import React from 'react'
// importando PropTypes   forzamos a enviar un prop obligatorio 
import PropTypes from 'prop-types';



// const PrimeraApp = () => { //vamos a poner las propperties
//usando la desestructuracion puedo obtener el saludo  del props usando { saludo } dentro del ( )
// const PrimeraApp = (props) => {
// Forzar a usar el component con el valor saludo, obligar a enviar el saludo desde PrimeraApp
// const PrimeraApp = ( {saludo = 'Hola Mundo'}) => {
// const PrimeraApp = ( {saludo}) => { //Ahora vamos a usar default value
// const PrimeraApp = ( {saludo, subtitulo = 'Soy un subtitulo'}) => { //una ves definido como defaultTypes
const PrimeraApp = ( {saludo, subtitulo}) => {

    // return <h1>Hola Mundo</h1>;
    //para el return el js debe retornar un objeto a la vez, no se pueden regresar estas dos cosas
    //return 
    // <h1>Hola Mundo</h1>
    // <p>Mi Primera App</p>;
    //con cambio de linea no funciona  - Si presiono enter, ya no funciona
    //PAra arreglaro se usan parenteisis ( ) y ponerlo en elemento root ya sea un div o cualquier otro
    // const saludos = {
    //     nombre: 'Edmundo',
    //     apellido: 'Pichardo'
    // };
    // console.log(saludo);

    // const saludos = 'Hola Mundo';

    return (
        <div>
            {/* <h1>Hola Mundo</h1> */}
            {/* <h1>{JSON.stringify(saludos, null, 3)}</h1> */}
            <h1>{ saludo }</h1>
            <p>{subtitulo}</p>
        </div>
        );
}   
//Para valores por defecto

PrimeraApp.propTypes = {
    // saludo: PropTypes.string //String pero no obligatorio. 
    saludo: PropTypes.string.isRequired, //String obligatorio
    otra: PropTypes.number,
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

//Esperamos que devuelva HTML 
export default PrimeraApp;
//Despues veremos Custom Hooks 