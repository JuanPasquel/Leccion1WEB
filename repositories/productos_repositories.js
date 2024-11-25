const db = require('../config/db');

class ProductosRepositories{

    async createProduct(producto){
        try{
            const [nuevo_producto] = await db.query('INSERT INTO productos SET ?', producto);
            return nuevo_producto;
        }catch(err){
            return err;
        }   
    }

    async readProducts(){
        try{
            const [productos] = await db.query('SELECT * FROM productos');
            return productos;
        }catch(err){
            return err;
        }
    }

    async editProducts(id_producto, datos_producto){
        try{
            const [producto_editado] = await db.query('UPDATE productos SET ? WHERE id_producto = ?', [datos_producto, id_producto]);
            if(producto_editado.affectedRows > 0){
                return {
                    message:  `Producto Actualizado ID: ${id_producto}`
                };
            }else{
                return {
                    message:  `Producto no se Encontró.`
                };
            }
            
        }catch(err){
            return err;
        }
    }

    async deleteProducts(id_producto){
        try{
            const [producto_eliminado] = await db.query('DELETE FROM productos WHERE id_producto = ?', id_producto);
            if(producto_eliminado.affectedRows > 0){
                return {
                    message:  `Producto Eliminado ID: ${id_producto}`
                };
            }else{
                return {
                    message:  `Producto no se Encontró.`
                };
            }
        }catch(err){
            return err;
        }
    }

}

module.exports = new ProductosRepositories();