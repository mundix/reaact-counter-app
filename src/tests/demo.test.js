// para corer pruebas $ npn or yarn run test 

//Primero el nombre o string, luego el callback o funtion

describe('Pruebas en el archivo demo.test.js', () =>{
    test('Esta es mi primera prueba', () => {
        const message1 = "Hola mundo";
        const message2 = "Hola mundo";
    
        expect(message1).toBe(message2);
    });
})

