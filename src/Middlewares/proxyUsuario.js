import express from "express";
import { plainToClass } from "class-transformer";
import { Usuario } from "../controller/Usuario.js";
import { validate } from "class-validator";

const proxiUsuario = express();

proxiUsuario.use(async (req, res, next) => {
  try {
    let data = plainToClass(Usuario, req.body, {
      excludeExtraneousValues: true,
    });
    const err = await validate(data);

    if (err.length > 0) {
      console.log(err);
    } else {
      req.body = JSON.parse(JSON.stringify(data));
      next();
    }
  } catch (error) {
    res.status(error.status).send(error);
  }
});

export default proxiUsuario;
