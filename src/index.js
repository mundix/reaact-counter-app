import React from 'react';
import ReactDOM from 'react-dom';
//Importamos el Componente o funcitonal Component, por que regresa HTML 
import PrimeraApp from './PrimerApp';

//importacion del Css
import './index.css'; // es una forma de trabajar css , hay otras 

// const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#app');

// ReactDOM.render(saludo, divRoot);
ReactDOM.render(<PrimeraApp/>, divRoot); //cuando lo ponemos dentro de < /> quiere decir que esun componente

