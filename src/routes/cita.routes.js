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
.get("/proximaCita", async(req, res)=>{
    try {
        const connection= await getConnection();
        let id=req.body.usu_id;
        const [rows, fields] = await connection.execute('SELECT cit_fecha FROm cita WHERE cit_datosUsuario=? AND cit_fecha>CURDATE() ORDER BY cit_fecha ASC LIMIT 1;',[id]);
        res.send(rows);
      } catch (error) {
        res.status(400).send(error.message);
      } 
  
  })

  .get("/citasUsuarioEspecifico", async(req, res)=>{
    try {
        const connection= await getConnection();
        let id=req.body.usu_id;
        const [rows, fields] = await connection.execute('SELECT * from cita INNER JOIN usuario ON cita.cit_datosUsuario=?;',[id]);
        res.send(rows);
      } catch (error) {
        res.status(400).send(error.message);
      } 
  
  })


export default storageCita;