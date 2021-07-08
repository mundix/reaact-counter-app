// import React from 'react';
import React, { useState } from 'react'; //cuando algo tenga un 'use' quiere decir que es un hook
import PropTypes from 'prop-types';
// Como manejar eventos click
//https://es.reactjs.org/docs/events.html 
const CounterApp = ({value}) => {

    //primer hook , Hook no es mas que una funciton
    // const state = useState('Goku'); //se hace una desetructuracion 
    // const [nombre, setNombre] = useState('Goku'); 
    const [ counter , setCounter ] = useState(0); 

    
    const handleAdd = () => {
        // setCounter(counter + 1); 
        setCounter( (c) =>  c + 1  ); //otra forma
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            
            <button onClick={ handleAdd }> +1 </button>
        </>
    );
}

CounterApp.propTypes = {
    value:PropTypes.number
}

CounterApp.defaultProps = {
    value: 0.00
}

export default  CounterApp;
