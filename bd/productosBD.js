const productosBD = require("./conexion").productos;
const Producto = require("../clases/ProductoClase");

function validarDatosProducto(producto) {
    var datosCorrectos = false;
    
    if (producto.producto != undefined && producto.cantidad != undefined && producto.precio != undefined) {
        datosCorrectos = true;
    }
    
    return datosCorrectos;
}

async function mostrarProductos() {
    const productos = await productosBD.get();
    var productosValidos = [];
    
    productos.forEach(producto => {
        const productoData = new Producto({id: producto.id, ...producto.data()});
        const productoValido = productoData.getproducto;
        if (validarDatosProducto(productoValido)) {
            productosValidos.push(productoValido);
        }
    });
    
    return productosValidos;
}

async function buscarProductoPorId(id) {
    const producto = await productosBD.doc(id).get();
    const productoData = new Producto({id: producto.id, ...producto.data()});
    var productoValido = { error: true };
    
    if (validarDatosProducto(productoData.getproducto)) {
        productoValido = productoData.getproducto;
    }
    
    return productoValido;
}

async function nuevoProducto(data) {
    if (!data.producto || !data.cantidad || !data.precio) {
        return { error: "Faltan datos para crear el producto" };
    }
    
    const productoData = new Producto(data);
    var productoValido = false;

    if (validarDatosProducto(productoData.getproducto)) {
        await productosBD.doc().set(productoData.getproducto);
        productoValido = true;
    }

    return productoValido;
}

async function borrarProducto(id) {
    const producto = await buscarProductoPorId(id);
    var borrado = false;
    
    if (producto.error != true) {
        await productosBD.doc(id).delete();
        borrado = true;
    }
    
    return borrado;
}

module.exports = {
    mostrarProductos,
    nuevoProducto,
    borrarProducto,
    buscarProductoPorId
};
