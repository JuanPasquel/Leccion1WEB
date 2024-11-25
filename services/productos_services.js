const ProductosRepositories = require('../repositories/productos_repositories');

class ProductoService{

    async createProduct(producto){
        return await ProductosRepositories.createProduct(producto);
    }

    async readProducts(){
        return await ProductosRepositories.readProducts();
    }

    async editProduct(id_producto, datos_producto){
        return await ProductosRepositories.editProducts(id_producto, datos_producto);
    }

    async deleteProduct(id_producto){
        return await ProductosRepositories.deleteProducts(id_producto);
    }

}

module.exports = new ProductoService();