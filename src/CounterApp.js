// import React from 'react';
import React, { useState } from 'react'; //cuando algo tenga un 'use' quiere decir que es un hook
import PropTypes from 'prop-types';
// Como manejar eventos click
//https://es.reactjs.org/docs/events.html 
const CounterApp = ({value = 10}) => {

    //primer hook , Hook no es mas que una funciton
    // const state = useState('Goku'); //se hace una desetructuracion 
    // const [nombre, setNombre] = useState('Goku'); 
    // const [ counter , setCounter ] = useState(0); 
    const [ counter , setCounter ] = useState(value);  //el value es el argumento qeu recibimos en nuestro componente 

    
    const handleAdd = () => {
        // setCounter(counter + 1); 
        setCounter( (c) =>  c + 1  ); //otra forma
    }

    const handleReset = () => {
        setCounter(value); 
    }

    const handleSubtract = () => {
        setCounter(counter - 1); 
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleSubtract }> -1 </button>
        </>
    );
}

CounterApp.propTypes = {
    value:PropTypes.number
}

CounterApp.defaultProps = {
    value: 10
}

export default  CounterApp;
