import { plainToClass } from "class-transformer";
import express from "express";
import { Especialidad } from '../controller/Especialidad.js'
import { validate } from "class-validator";

const proxyEspecialidad=express();

proxyEspecialidad.use(async(req,res, next)=>{
    try {
        let data=plainToClass(Especialidad, req.query, {
            excludeExtraneousValues: true,
          });
          const err = await validate(data);

    if (err.length > 0) {
      console.log(err);
    } else {
      req.query = JSON.parse(JSON.stringify(data));
      next();
    }
    } catch (error) {
        res.status(error.status).send(error);
    }
})

export default proxyEspecialidad;