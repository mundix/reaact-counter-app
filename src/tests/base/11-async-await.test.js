import { getImagen } from "../../base/11-async-await"

describe('Pruebas con Async y Fetch', () => {

    test('Debe retonar url de imagen', async() => {
        
        const url = await getImagen(); //Regresa una promesa
        
        expect(typeof url).toBe('string');
        //Recibe false por que el api key no existe y no devuelve una url que contega https://
        expect(url.includes('https://')).toBe(true);
        
    })
    
})