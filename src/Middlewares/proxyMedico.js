import express from 'express';
import { plainToClass } from "class-transformer";
import { Medico } from '../controller/Medico.js'


const proxiMedico=express();

proxiMedico.use((req, res, next)=>{
    try {
        console.log(req.params);
        console.log(req.query);
        /*
        let data=plainToClass(Medico, req.params, {excludeExtraneousValues:true})
        req.params=JSON.parse(JSON.stringify(data));
        next();*/
    } catch (error) {
        res.status(error.status).send(error)
    }
    
})

export default proxiMedico;