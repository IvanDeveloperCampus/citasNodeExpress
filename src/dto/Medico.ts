import {Expose, Type, Transform} from 'class-transformer';

export class Medico{
    @Expose({name:"idMedico"})
    @Transform(({value})=>{ if(Math.floor(value) && typeof value == "number") return Math.floor(value); else throw {"status":400, "message":"el id_product no cumple"}}, {toClassOnly:true})
    med_nroMatriculaProfesional:number
}