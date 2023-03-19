"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
var persona = /** @class */ (function () {
    function persona(nombre, apelllidos, edad, dni, cumpleaños, color_fav, sexo, direcciones, mails, telefonos, notas) {
        this.direcciones = [];
        this.mails = [];
        this.telefonos = [];
        this.nombre = nombre;
        this.apellidos = apelllidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.color_fav = color_fav;
        this.sexo = enum_sexo[sexo];
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    ;
    persona.prototype.get_dni = function () {
        console.log(this.dni);
    };
    ;
    persona.prototype.get_persona = function () {
        return this.nombre + " " + this.apellidos;
    };
    //Editar esto #####################################################################
    persona.prototype.get_sexo = function () {
        return this.sexo;
    };
    ;
    persona.prototype.set_direccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    ;
    persona.prototype.set_mail = function (mail) {
        this.mails.push(mail);
    };
    ;
    persona.prototype.set_telefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    ;
    return persona;
}());
exports.persona = persona;
var enum_sexo;
(function (enum_sexo) {
    enum_sexo[enum_sexo["mujer"] = 0] = "mujer";
    enum_sexo[enum_sexo["hombre"] = 1] = "hombre";
    enum_sexo[enum_sexo["otro"] = 2] = "otro";
})(enum_sexo || (enum_sexo = {}));
