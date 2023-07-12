import { Router } from "express";
import getConnection from '../db/database.js'

const storageConsultorio=Router();

storageConsultorio
.get("/consultorioUsuarioEspecifico", async(req, res)=>{
  try {
    let id=req.body.usu_id;
      const connection= await getConnection();
      const [rows, fields] = await connection.execute('SELECT DISTINCT consultorio.* FROM consultorio INNER JOIN medico ON consultorio.cons_codigo=medico.med_consultorio INNER JOIN cita ON medico.med_nroMatriculaProfesional=cita.cit_medico INNER JOIN usuario ON cita.cit_datosUsuario=?;', [id]);
      res.send(rows);
    } catch (error) {
      res.status(400).send(error.message);
    } 

})


export default storageConsultorio;