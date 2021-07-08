import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    return (
        <>
            <h1>Counter App</h1>
            <h2>{value}</h2>
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
