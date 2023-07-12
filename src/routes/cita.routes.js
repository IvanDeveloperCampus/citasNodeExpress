import { Router } from "express";
import getConnection from '../db/database.js'

const storageCita=Router();

storageCita
.get("/getCitas", async(req, res)=>{
  try {
      const connection= await getConnection();
      const [rows, fields] = await connection.execute('SELECT * FROM cita');
      res.send(rows);
    } catch (error) {
      res.status(400).send(error.message);
    } 

})


export default storageCita;