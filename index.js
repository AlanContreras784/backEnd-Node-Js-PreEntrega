import {obtenerProductos, agregarProducto,modificarProducto, eliminarProducto} from "./funciones_metodos.js";

// Obtenemos los argumentos a partir del 3er elemento
const args = process.argv.slice(2);

// Verificamos si hay al menos un argumento
if (args.length === 0) {
    console.log("No se recibió ningún comando.");
    process.exit(1);
}

const [metodo, endPoint, ...items] = args;
// const metodo = args[0]; // GET, POST, PUT, PATCH, DELETE
// const endPoint = args[1]; // {data} o {id}
// const title= args[2]; // {title} 
// const price = args[3];  // {precio}
// const category = args[4];  // {category}

console.log(args);

// Lógica según el comando
switch (metodo.toUpperCase()) {
    case "GET":
        if (!endPoint) {
            console.log("Falta el dato para GET");
        }else{
            const productos = await obtenerProductos(endPoint);
            console.log(productos);
            console.log("Los productos o producto se obtuvieron con éxito");
        }
        break;
        

    case "POST":
        if (!endPoint) {
            console.log("Falta el dato para POST");
        } else {
            const nuevoProducto = await agregarProducto(endPoint, items[0], items[1], items[2]);
            console.log(nuevoProducto);
            console.log(`El producto ${nuevoProducto.title} se agregó con éxito`);
        }
        break;

    case "PUT":
        if (!endPoint) {
            console.log("Falta el id para PUT");
        } else {
            const productoModificado = await modificarProducto(endPoint, items[0], items[1], items[2]);
            console.log(productoModificado);
            console.log(`El producto ${productoModificado.title} se modificó con éxito`);
        }
        break;

    case "DELETE":
        if (!endPoint) {
            console.log("Falta el id para DELETE");
        } else {
            const productoEliminado =  await eliminarProducto(endPoint);
            console.log(productoEliminado);
            console.log(`El producto ${productoEliminado.title} se eliminó con éxito`);
        }
        break;

    default:
        console.log("Comando no reconocido. Usa GET, POST, PUT o DELETE.");
}

