import { Router } from "express";
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
const appProductos = Router();
let conn = undefined;

appProductos.use((req, res, next) => {
    conn = mysql.createPool({ 
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME, 
        password: process.env.DB_PASSWORD, 
        database: process.env.DB_DATABASE, 
        port: process.env.DB_PORT 
    });
    next();
});

export default appProductos;