class Producto {
    constructor(data) {
        this.id = data.id;
        this.producto = data.producto;
        this.cantidad = data.cantidad;
        this.precio = data.precio;
    }

    set id(id) {
        this._id = id;
    }

    set producto(producto) {
        if (producto && producto.length > 0) {
            this._producto = producto;
        } else {
            this._producto = "Producto desconocido";  // Establece un valor por defecto o lanza un error si es necesario
        }
    }

    set cantidad(cantidad) {
        if (cantidad >= 0) {
            this._cantidad = cantidad;
        }
    }

    set precio(precio) {
        if (precio >= 0) {
            this._precio = precio;
        }
    }

    get id() {
        return this._id;
    }

    get producto() {
        return this._producto;
    }

    get cantidad() {
        return this._cantidad;
    }

    get precio() {
        return this._precio;
    }

    get getproducto() {
        const conid = {
            id: this._id,
            producto: this._producto,
            cantidad: this._cantidad,
            precio: this._precio
        };

        const sinid = {
            producto: this._producto,
            cantidad: this._cantidad,
            precio: this._precio
        };

        if (this.id != undefined) {
            return conid;
        } else {
            return sinid;
        }
    }
}

module.exports = Producto;
