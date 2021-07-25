export const getImagen = async() => {

    try {

        const apiKey = 'Nr4bfrgRK7obHM3O68YwvQ2iUmuxi8Yj';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        // return error;
        return 'No existe';
    }
    
    
    
}




