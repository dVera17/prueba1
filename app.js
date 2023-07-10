import express from 'express';
import appBodegas from './routers/bodegas.js';
import appProductos from './routers/productos.js';
const app = express();

app.use(express.json());
app.use('/bodegas', appBodegas);
app.use('/productos', appProductos);

app.listen(5010, (req, res) => {
    console.log('Server listening on port 5010');
})