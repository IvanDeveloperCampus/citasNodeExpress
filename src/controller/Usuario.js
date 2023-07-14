var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsDefined, MaxLength, MinLength } from 'class-validator';
export class Usuario {
}
__decorate([
    Expose({ name: "idUsuario" }),
    Transform(({ value }) => { if (Math.floor(value) && typeof value == "number")
        return Math.floor(value);
    else
        throw { "status": 400, "message": "el id_product no cumple" }; }, { toClassOnly: true }),
    IsDefined({ message: () => { throw { status: 401, message: 'el parametro id es obligatorio' }; } }),
    MinLength(5, { message: () => { throw { status: 401, message: 'el id min es de 5' }; } }),
    MaxLength(15, { message: () => { throw { status: 401, message: 'el id max es de 15' }; } }),
    __metadata("design:type", Number)
], Usuario.prototype, "usu_id", void 0);
