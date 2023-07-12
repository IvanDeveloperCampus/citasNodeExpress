import { Router } from "express";
import getConnection from '../db/database.js'

const storageUsuario=Router();

storageUsuario.get("/get", async(req, res)=>{
    try {
        const connection= await getConnection();
        const [rows, fields] = await connection.execute('SELECT * FROM usuario order by usu_nombre ASC');
        res.send(rows);
      } catch (error) {
        res.status(400).send(error.message);
      } 

})

export default storageUsuario;