import express from 'express';
import { plainToClass } from "class-transformer";
import { Medico } from '../controller/Medico.js'


const proxiMedico=express();

proxiMedico.use((req, res, next)=>{
    try {
        
        let data=plainToClass(Medico, req.query.idMedico, {excludeExtraneousValues:true})
        req.query=JSON.parse(JSON.stringify(data));
        next();
    } catch (error) {
        res.status(error.status).send(error)
    }
    
})

export default proxiMedico;