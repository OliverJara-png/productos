class Venta {
    constructor(data) {
        this.idUsuario = data.idUsuario;
        this.idProducto = data.idProducto;
        this.fecha = data.fecha || new Date().toISOString().split('T')[0]; // Fecha actual si no se proporciona
        this.hora = data.hora || new Date().toLocaleTimeString(); // Hora actual si no se proporciona
        this.estatus = data.estatus || "vendido"; // Estatus por defecto
    }

    set id(id) {
        this._id = id;
    }

    set idUsuario(idUsuario) {
        this._idUsuario = idUsuario;
    }

    set idProducto(idProducto) {
        this._idProducto = idProducto;
    }

    set fecha(fecha) {
        this._fecha = fecha;
    }

    set hora(hora) {
        this._hora = hora;
    }

    set estatus(estatus) {
        this._estatus = estatus;
    }

    get id() {
        return this._id;
    }

    get idUsuario() {
        return this._idUsuario;
    }

    get idProducto() {
        return this._idProducto;
    }

    get fecha() {
        return this._fecha;
    }

    get hora() {
        return this._hora;
    }

    get estatus() {
        return this._estatus;
    }

    get getventa() {
        return {
            idUsuario: this.idUsuario,
            idProducto: this.idProducto,
            fecha: this.fecha,
            hora: this.hora,
            estatus: this.estatus
        };
    }
}

module.exports = Venta;
