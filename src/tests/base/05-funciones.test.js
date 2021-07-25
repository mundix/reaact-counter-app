import '@testing-library/jest-dom'; //es opcional 
import { getUser, getUsuarioActivo } from '../../base/05-funciones';
describe('Pruebas en el archivo 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser('El_Papi1502');
        
    });

    test('getUsuarioActivo debe de retornar un objeto. ', () => {
        
        const user = {
            uid: 'ABC567',
            username: 'mundix'
        };
        const username = user.username;
        const userActivo = getUsuarioActivo(username);
        // expect(user).toBe(userTest); //para comparar el objeto no es toBe es toEqual
        expect(user).toEqual(userActivo); // ok 
        // 
        expect(user).toEqual(userActivo); // ok 
        // console.log(user);
    })
});