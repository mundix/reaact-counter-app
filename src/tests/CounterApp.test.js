import React from 'react'
import CounterApp from "../CounterApp";

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Archivo de pruebas de <CounterApp/>', () => {
    //movi este wrapper de la primera prueba afuera ene l describe
    // let wrapper; //inicializado como undefi
    let wrapper = shallow(<CounterApp/>); //inicializado como undefi
 
    //Esta funciona se va a ejecutar antes de todas las funciones
    beforeEach(() =>{
         wrapper = shallow(<CounterApp/>);
    });

    test('Debe mostar <CounterApp/> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot(); // ? 
    });

    test('Debe mostrar el valor por defecto de 100 ', () => {
        const wrapper = shallow( <CounterApp value={ 100 }/>);
                
        const textParrafo = wrapper.find('h2').text().trim(); //busca un <p> solo me interesa el texto
        // expect(textParrafo).toEqual('<h2>'+value+'</h2>');
        expect(textParrafo).toBe('100');
    });

    test('Debe incrementar cone l boton +1', () => {
        
        //busca todos los botones y selecciona el primero con el .at(0)
        // const btn1 = wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');

    });


    test('Debe decrementar cone l boton -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');

    });
    
    
    test('Probado el Reset Button', () => {
        const wrapper = shallow( <CounterApp value={ 105 }/>);

        //Necesito cambiar el texto 
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');
    })
    

});