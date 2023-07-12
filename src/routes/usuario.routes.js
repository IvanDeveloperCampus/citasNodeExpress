import { Router } from "express";
import getConnection from '../db/database.js'

const storageUsuario=Router();

storageUsuario
.get("/getUsuarios", async(req, res)=>{
    try {
        const connection= await getConnection();
        const [rows, fields] = await connection.execute('SELECT * FROM usuario order by usu_nombre ASC');
        res.send(rows);
      } catch (error) {
        res.status(400).send(error.message);
      } 

})
.get("/usuariosMedicoEspecifico", async(req, res)=>{
  try {
      let id=req.body.med_nroMatriculaProsional;
      const connection= await getConnection();
      const [rows, fields] = await connection.execute('select DISTINCT usuario.usu_nombre from usuario INNER JOIN cita ON usuario.usu_id=cita.cit_datosUsuario INNER JOIN medico ON cita.cit_medico=medico.med_nroMatriculaProfesional WHERE medico.med_nroMatriculaProfesional=?;', [id]);
      res.send(rows);
    } catch (error) {
      res.status(400).send(error.message);
    } 

})

export default storageUsuario;