import express from  'express';
import dotenv from 'dotenv';
import storageUsuario from './routes/usuario.routes.js';


dotenv.config();

const app=express();

app.use(express.json())

app.use("/usuario", storageUsuario)

const port=process.env.PORT;

app.listen(port, ()=>{
    console.log("server corriendoo");
})