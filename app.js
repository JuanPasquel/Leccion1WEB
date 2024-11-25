const express = require('express');
require('dotenv').config();
const router = require('./routes/productos_routes');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/inventario', router);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});