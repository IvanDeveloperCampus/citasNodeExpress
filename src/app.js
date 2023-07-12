import express from  'express';
import dotenv from 'dotenv';
import storageUsuario from './routes/usuario.routes.js';
import storageCita   from './routes/cita.routes.js';
import storageMedico from './routes/medico.routes.js';


dotenv.config();

const app=express();

app.use(express.json())

app.use("/usuario", storageUsuario)
app.use("/cita", storageCita)
app.use("/medico", storageMedico)

const port=process.env.PORT;

app.listen(port, ()=>{
    console.log("server corriendoo");
})