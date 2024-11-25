class Producto{

    constructor(id_producto, nombre_producto, precio_producto, categoria_producto, detalles_producto){
        this.id_producto = id_producto;
        this.nombre_producto = nombre_producto;
        this.precio_producto = precio_producto;
        this.categoria_producto = categoria_producto;
        this.detalles_producto = detalles_producto;
    }

}

module.exports = Producto;