import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';
describe('Pruebas en functiones de Heroe', () => {
    
    test('Debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        // console.log(heroe);
        const heroeData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe retornar undefined si heroe no existe', () => {
        const id = 10; //un id que no existe
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    //debe retornar los heroes de DC
    test('debe retornar los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroeData = heroes.filter( h => h.owner === owner); //retornar filtrado
        expect(heroes).toEqual(heroeData);
    });

    test('Debe retornar un arreglo conlso heroes de Marvel ', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length).toBe(2)
    })
    
});