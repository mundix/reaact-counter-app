import React from 'react';
import PropTypes from 'prop-types';
// Como manejar eventos click
//https://es.reactjs.org/docs/events.html 
const CounterApp = ({value}) => {

    const handleAdd = (e) => {
        console.log(e);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{value}</h2>
            
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
