//-----------La Url Global----------------
//const URL= 'https://68100ddf27f2fdac24102328.mockapi.io/productosNode'
//const URL= 'https://68100ddf27f2fdac24102328.mockapi.io/'

const URL = 'https://fakestoreapi.com' ;

//----FUNCION PARA EL GET :OBTIENE TODOS LOS PRODUCTOS Y UN PRODUCTO ESPECIFICO-------

async function obtenerProductos(id) {
    try {
        const respuesta = await fetch(`${URL}/${id}` ,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log("Error", error);
    } finally {
        console .log("Proceso terminado");
    }
}

//-----------FUNCION PARA EL POST: AGREGA UN NUEVO PRODUCTO----------------

async function agregarProducto(id, title, price, category) {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": title,
            "price": Number(price),
            "category": category,
        })
    }
    try {
        const respuesta = await fetch(`${URL}/${id}`, config);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log("Error", error);
    } finally {
        console.log("Proceso terminado");
    }
}


//-----------FUNCION PARA EL PUT: MODIFICA UN PRODUCTO----------------

async function modificarProducto(id,title, price, category) {
    const config = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": title,
            "price": Number(price),
            "description": "Nueva descripción",
            "category": category,
            "image": "http://example.com/nueva-imagen.jpg"
        })
    }
    try {
        const respuesta = await fetch(`${URL}/${id}`, config);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log("Error", error);
    } finally {
        console.log("Proceso terminado");
    }
}

//-----------FUNCION PARA EL DELETE: ELIMINA UN PRODUCTO----------------

async function eliminarProducto(id) {
    const config = {
        method: 'DELETE',
    }
    try {
        const respuesta = await fetch(`${URL}/${id}`, config);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log("Error", error);
    } finally {
        console.log("Proceso terminado");
    }
}

export {agregarProducto, obtenerProductos, modificarProducto, eliminarProducto} ;