import { Router } from "express";
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
const appBodegas = Router();
let conn = undefined;

appBodegas.use((req, res, next) => {
    conn = mysql.createPool({ 
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME, 
        password: process.env.DB_PASSWORD, 
        database: process.env.DB_DATABASE, 
        port: process.env.DB_PORT 
    });
    next();
});

appBodegas.get('/', (req, res) => {
    conn.query(`SELECT * FROM bodegas ORDER BY nombre ASC`, (err, data, fields) => {
        res.status(200).send(data);
    });
})

appBodegas.post('/', (req, res) => {
    const { nombre, id_responsable, estado, created_by, update_by, created_at, updated_at, deleted_at } = req.body;
    conn.query(`INSERT INTO bodegas(nombre, id_responsable, estado, created_by, update_by) VALUES ('${nombre}', ${id_responsable}, ${estado}, ${created_by}, ${update_by});`, (err, data, fields) => {
        if(err){
            console.log('Error: \n' + err);
        };
        res.status(200).send('Usuario agregado correctamente');
    });
});

export default appBodegas;