import express from  'express';
import dotenv from 'dotenv';
import 'reflect-metadata';
import storageUsuario from './routes/usuario.routes.js';
import storageCita   from './routes/cita.routes.js';
import storageMedico from './routes/medico.routes.js';
import storageConsultorio from './routes/consultorio.routes.js';


dotenv.config();

const app=express();

app.use(express.json())

app.use("/usuario", storageUsuario)
app.use("/cita", storageCita)
app.use("/medico", storageMedico)
app.use("/consultorio", storageConsultorio)

const port=process.env.PORT;

app.listen(port, ()=>{
    console.log("server corriendoo");
})