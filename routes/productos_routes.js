const ProductoController = require('../controllers/productos_controllers');
const express = require('express');
const router = express.Router();

router.get('/', ProductoController.readProducts);
router.post('/', ProductoController.createProduct);
router.put('/:id_producto', ProductoController.editProducts);
router.delete('/:id_producto', ProductoController.deleteProducts);

module.exports = router;