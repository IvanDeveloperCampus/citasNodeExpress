import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength} from 'class-validator';

export class Usuario{
    @Expose({name:"idUsuario"})
    @Transform(({value})=>{ if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {"status":400, "message":"el id_product no cumple"}}, {toClassOnly:true})
    @IsDefined({message: ()=>{throw {status:401, message:'el parametro id es obligatorio'}}})
    @MinLength(5, {message:()=>{throw {status: 401, message: 'el id min es de 5'}}})
    @MaxLength(15, {message:()=>{throw {status: 401, message: 'el id max es de 15'}}})
    usu_id:number
}