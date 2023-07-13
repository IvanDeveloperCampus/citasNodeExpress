import {Expose, Type, Transform} from 'class-transformer';

export class Medico{
    @Expose({name:"especialidad"})
    @Type(()=>String)
    esp_nombre:string
}