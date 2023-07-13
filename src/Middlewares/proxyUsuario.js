import express from 'express';
import { plainToClass } from "class-transformer";
import { Usuario } from '../controller/Usuario.js'


const proxiUsuario=express();

proxiUsuario.use((req, res, next)=>{
    try {
        let data=plainToClass(Usuario, req.body, {excludeExtraneousValues:true})
        req.body=JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
    
})

export default proxiUsuario;