import { Router } from "express";
import getConnection from '../db/database.js'

const storageMedico=Router();

storageMedico
.get("/getMedicos", async(req, res)=>{
  try {
      let especialidad=req.query.especialidad;
      const connection= await getConnection();
      const [rows, fields] = await connection.execute('SELECT medico.med_nombreCompleto FROM `medico` INNER JOIN especialidad ON med_especialidad=especialidad.esp_id WHERE especialidad.esp_nombre=?;', [especialidad]);
      res.send(rows);
    } catch (error) {
      res.status(400).send(error.message);
    } 

})
.get("/medicosAndConsultorios", async(req, res)=>{
    try {
        const connection= await getConnection();
        const [rows, fields] = await connection.execute('SELECT medico.med_nombreCompleto, consultorio.cons_nombre from medico INNER JOIN consultorio ON medico.med_consultorio=consultorio.cons_codigo;');
        res.send(rows);
      } catch (error) {
        res.status(400).send(error.message);
      } 
  
  })



export default storageMedico;