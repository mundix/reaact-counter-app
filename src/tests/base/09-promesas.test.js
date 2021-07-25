import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con Promise', () => {
    //cuando se le pone el done, el evalua el promise 
    test('getHeroeByIdAsync Debe retornar un heroe async ', ( done ) => {
        
        const id = 1;
        
        getHeroeByIdAsync(id)
            .then( heroe => {
                // expect(true).toBe(false); //probando que se ejectua al 1.5 segundo 
                expect(heroe).toBe(heroes[0]);
                done(); // Done para evaluar que termino el promise
            });
    });
   
    test('Dene obtener un error si un heroe no existe ', (done) => {
        
        const id = 10;
        getHeroeByIdAsync(id)
        .catch( error => {
            expect( error )
            .toBe('No se pudo encontrar el héroe');
            
            done();
        })

    });
    
});