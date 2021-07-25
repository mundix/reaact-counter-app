import '@testing-library/jest-dom'; //este se importo para que tenga todo los mtodos el expect
import { getSaludo } from '../../base/02-template-string';

describe('Prueba en el archivo 02-tempalte-string.test.js', ()=>{

    //para exportar la function de este archivo debemos exportarlo 
    test('Prueba en el metodo getSaludo, debe retornar Hola fernando !', () => {
        const nombre = 'Fernando';

        const saludo = getSaludo( nombre);
        // console.log(saludo);
        expect(saludo).toBe('Hola ' + nombre + ' !'); 
    });

    //getSaludo debe retornar 'Hola Carlos!' si no hay argumento nombre
    test('getSaludo debe retornar \'Hola Carlos!\' si no hay argumento nombre', () => {
        // const nombre = 'Carlos';
        // const saludo = getSaludo();
        
        // expect(saludo).toBe('Hola ' + nombre + ' !'); 
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos !');
    });

});