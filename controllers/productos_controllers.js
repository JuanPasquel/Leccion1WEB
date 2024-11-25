const ProductoService = require('../services/productos_services');

class ProductoController{

    async createProduct(req, res){
        res.status(201).json(await ProductoService.createProduct(req.body));
    }

    async readProducts(req, res){
        res.json(await ProductoService.readProducts());
    }

    async editProducts(req, res){
        res.json(await ProductoService.editProduct(req.params.id_producto, req.body));
    }

    async deleteProducts(req, res){
        res.json(await ProductoService.deleteProduct(req.params.id_producto));
    }

}

module.exports = new ProductoController();