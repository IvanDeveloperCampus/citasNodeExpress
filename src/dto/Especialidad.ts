import {Expose, Type, Transform} from 'class-transformer';
import {IsDefined, MaxLength, MinLength} from 'class-validator';

export class Especialidad{
    @Expose({name:"especialidad"})
    @IsDefined({message: ()=>{throw {status:401, message:'el parametro password es obligatorio'}}})
    @MinLength(8, {message:()=>{throw {status: 401, message: 'el nombre de la especialidad tiene min 8 caracteres'}}})
    @MaxLength(30, {message:()=>{throw {status: 401, message: 'el nombre de la especialidad tiene max 30 caracteres'}}})
    @Type(()=>String)
    esp_nombre:string
}