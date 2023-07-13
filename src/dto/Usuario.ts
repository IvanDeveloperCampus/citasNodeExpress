import {Expose, Type, Transform} from 'class-transformer';

export class Usuario{
    @Expose({name:"idUsuario"})
    @Transform(({value})=>{ if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {"status":400, "message":"el id_product no cumple"}}, {toClassOnly:true})
    usu_id:number
}