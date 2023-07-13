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
.get("/proximaCita/:id", async(req, res)=>{
    try {
        const connection= await getConnection();
        let id=req.params.id
        const [rows, fields] = await connection.execute('SELECT cit_fecha FROm cita WHERE cit_datosUsuario=? AND cit_fecha>CURDATE() ORDER BY cit_fecha ASC LIMIT 1;',[id]);
        res.send(rows);
      } catch (error) {
        res.status(400).send(error.message);
      } 
  
  })



  .get("/citasFechaEspecifica", async(req, res)=>{
    try {
        const connection= await getConnection();
        let fecha=req.query.fecha;
        const [rows, fields] = await connection.execute('SELECT * FROM `cita` WHERE cit_fecha=?;',[fecha]);
        res.send(rows);
      } catch (error) {
        res.status(400).send(error.message);
      } 
  
  })
  .get("/citasFechaMedicoEspecifico/:idMedico", async(req, res)=>{
    try {
        const connection= await getConnection();
        let med_nroMatriculaProsional=req.params.idMedico;
        let fecha=req.body.fecha;
        const [rows, fields] = await connection.execute('SELECT COUNT(*) as cantidad from cita INNER JOIN medico ON cita.cit_medico=? WHERE cita.cit_fecha=?',[med_nroMatriculaProsional,fecha]);
        console.log(rows[0]['cantidad']);
        res.send(rows);
      } catch (error) {
        res.status(400).send(error.message);
      } 
  
  })
  .get("/citasPorGenero", async(req, res)=>{
    try {
        const connection= await getConnection();
        let genero=req.query.genero;
        const [rows, fields] = await connection.execute('SELECT cita.* FROM cita INNER JOIN usuario on cita.cit_datosUsuario=usuario.usu_id INNER JOIN genero on usuario.usu_genero=genero.gen_id WHERE genero.gen_abreviatura=?;',[genero]);
        res.send(rows);
      } catch (error) {
        res.status(400).send(error.message);
      } 
  })
  .get("/citasRechazadas", async(req, res)=>{
    try {
        const connection= await getConnection();
        const [rows, fields] = await connection.execute('SELECT cita.cit_fecha AS fecha, usuario.usu_nombre AS Paciente, medico.med_nombreCompleto AS Medico FROM cita INNER JOIN usuario on cita.cit_datosUsuario=usuario.usu_id INNER JOIN medico on cita.cit_medico=medico.med_nroMatriculaProfesional INNER JOIN estado_cita on cita.cit_estadoCita=estado_cita.estcita_id WHERE estado_cita.estcita_nombre="RECHAZADA";');
        res.send(rows);
      } catch (error) {
        res.status(400).send(error.message);
      } 
  })
  



export default storageCita;