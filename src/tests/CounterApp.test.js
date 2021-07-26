import React from 'react'
import CounterApp from "../CounterApp";

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Archivo de pruebas de <CounterApp/>', () => {

    test('Debe mostar <CounterApp/> correctamente', () => {
        const value=10;
        const wrapper = shallow(<CounterApp/>);
        
        expect(wrapper).toMatchSnapshot(); // ? 
    });

    test('Debe mostrar el valor por defecto de 100 ', () => {
        const wrapper = shallow( <CounterApp value={ 100 }/>);
                
        const textParrafo = wrapper.find('h2').text().trim(); //busca un <p> solo me interesa el texto
        // expect(textParrafo).toEqual('<h2>'+value+'</h2>');
        expect(textParrafo).toBe('100');
    })
    
    

});