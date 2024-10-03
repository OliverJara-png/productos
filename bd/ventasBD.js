const ventasBD = require("./conexion").bd.collection("ventas");
const Venta = require("../clases/VentaClase");

async function nuevaVenta(data) {
    // Valida que los campos necesarios estén presentes
    if (!data.idUsuario || !data.idProducto) {
        throw new Error('Faltan campos necesarios para crear la venta');
    }

    const venta = new Venta(data); // Crea una nueva instancia de Venta con los datos proporcionados
    
    const ventaData = venta.getventa; // Obtén el objeto de venta con todos los campos

    // Guarda la venta en Firestore
    await ventasBD.doc().set(ventaData);
    return ventaData;
}

async function mostrarVentas() {
    const ventasSnapshot = await ventasBD.get();
    let ventas = [];
    ventasSnapshot.forEach(doc => {
        const ventaData = new Venta({ id: doc.id, ...doc.data() });
        ventas.push(ventaData.getventa);
    });
    return ventas;
}

async function buscarVentaPorId(id) {
    const venta = await ventasBD.doc(id).get();
    if (!venta.exists) {
        return { error: "Venta no encontrada" };
    }
    return { id: venta.id, ...venta.data() };
}

async function cancelarVenta(id) {
    const venta = await ventasBD.doc(id).get();
    if (!venta.exists) {
        return { error: "Venta no encontrada" };
    }

    await ventasBD.doc(id).update({ estatus: "cancelado" });
    return { message: "Venta cancelada" };
}

module.exports = {
    nuevaVenta,
    mostrarVentas,
    buscarVentaPorId,
    cancelarVenta
};
