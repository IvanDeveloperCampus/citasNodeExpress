import { Router } from "express";
import getConnection from '../db/database.js'

const storageMedico=Router();

storageMedico
.get("/getMedicos", async(req, res)=>{
  try {
      const connection= await getConnection();
      const [rows, fields] = await connection.execute('SELECT medico.med_nombreCompleto FROM `medico` INNER JOIN especialidad ON med_especialidad=especialidad.esp_id WHERE especialidad.esp_nombre="Cardiologia";');
      res.send(rows);
    } catch (error) {
      res.status(400).send(error.message);
    } 

})


export default storageMedico;