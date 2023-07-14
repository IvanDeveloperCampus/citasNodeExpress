import {Expose, Type} from 'class-transformer';
import {IsDefined, MaxLength} from 'class-validator';

export class Genero{
    @Expose({name:"genero"})
    @IsDefined({message: ()=>{throw {status:401, message:'el parametro del genero es obligatorio'}}})
    @MaxLength(3, {message:()=>{throw {status: 401, message: 'la abreviatura del genero tiene max 3 caracteres'}}})
    @Type(()=>String)
    gen_abreviatura:string
}