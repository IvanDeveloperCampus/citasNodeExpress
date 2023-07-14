import express from 'express';
import { plainToClass } from "class-transformer";
import {Genero} from '../controller/Genero.js'
import { validate } from 'class-validator';

const proxiGenero=express();

proxiGenero.use(async(req,res,next)=>{
    try {
        let data=plainToClass(Genero, req.query, {excludeExtraneousValues:true})
        const error=await validate(data);
        if (error.length>0) {
            console.log(error);
        }else{
            req.query=JSON.parse(JSON.stringify(data));
            next();
        }
    } catch (error) {
        res.status(error.status).send(error);
  
    }
})

export default proxiGenero;