"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telefono = void 0;
var telefono = /** @class */ (function () {
    function telefono(tipo, numero) {
        this.numero = numero;
        this.tipo = tipo;
    }
    telefono.prototype.get_numero = function () {
        console.log(this.numero);
    };
    telefono.prototype.set_numero = function (numero) {
        this.numero = numero;
    };
    telefono.prototype.get_tipo = function () {
        console.log(this.tipo);
    };
    telefono.prototype.set_tipo = function (tipo) {
        this.tipo = tipo;
    };
    return telefono;
}());
exports.telefono = telefono;
