//debemos usar esta instalacion para react 17+ yarn add --dev @wojtekmaj/enzyme-adapter-react-17
//https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17 

import React from 'react'
import PrimeraApp from "../PrimerApp";
import { getByText, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Prueba en <PrimeraApp/>', () =>{
    // test('debe de mostrar el mensajke "Hola soy Goku"', () => {
    //     const saludo = 'Hola soy Goku';

    //     const wrapper = render(<PrimeraApp saludo={saludo}/>);

    //     // expect( getByText(saludo) ).toBeInTheDocument(); no la voy a utilizar mas con la instalacion de Enzyme
    //     //Vamos a usar Enzyme 2.x 
    //     // expect();

    // });

    test('Debe de mostrar <PrimeraApp/> correctamente',  () => {

        const saludo = 'Hola soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        
        expect(wrapper).toMatchSnapshot(); // ? 
        //para hacer la evalucion de que aparece en pantalla/
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola soy Goku';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow( <PrimeraApp 
            saludo={saludo}
            subtitulo={subtitulo}
             />);
                
        const textParrafo = wrapper.find('p').text(); //busca un <p> solo me interesa el texto
        // const textParrafo2 = wrapper.find('h1'); //busca un <h1>
        // console.log(textParrafo);
        expect(textParrafo).toBe(subtitulo);

    })
    
});