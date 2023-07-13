import express from 'express';
import { plainToClass } from "class-transformer";
import { Cita } from '../controller/Cita.js';



const proxiCita=express();

proxiCita.use((req, res, next)=>{
    try {
        console.log(req.query);
        let data=plainToClass(Cita, req.query, {excludeExtraneousValues:true})
        req.query=JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
    
})

export default proxiCita;