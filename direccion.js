"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.direccion = void 0;
var direccion = /** @class */ (function () {
    function direccion(calle, numero, piso, letra, codigo_postal, poblacion, provincia) {
        this.calle = calle,
            this.numero = numero,
            this.piso = piso,
            this.letra = letra,
            this.codigo_postal = codigo_postal,
            this.poblacion = poblacion,
            this.provincia = provincia;
    }
    return direccion;
}());
exports.direccion = direccion;
