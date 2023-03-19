"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var persona_1 = require("./persona");
//Hay que usar console.log
/*
usar las clases y definir métodos necesarios
crear 3 registros de persona
console.log para mostrarlo en el terminal
modificar un registro de persona a través de una búsqueda por DNI y
añadiendo una nueva dirección, un nuevo mail y un nuevo teléfono.
Estos cambios se deben realizar mediante el uso de métodos
previamente en las clases.
Desde el módulo principal mostrar 3 registros con los cambios realizados
anteriormente en la consola.
*/
// Creo una agenda:
var agenda = [];
//Creo los datos de las 3 personas iniciales de mi agenda:
// Mujer Lobo:
var fecha1 = new Date("1998-01-11");
var dirs1 = [];
var direccion11 = new direccion_1.direccion("Cueva", 2, 0, "C", 10000, "Donde nunca se pone el sol", "Roca azul");
dirs1.push(direccion11);
var mails1 = [];
var mail11 = new mail_1.mail("Trabajo", "loba@lobito.ito");
mails1.push(mail11);
var tels1 = [];
var tel11 = new telefono_1.telefono("Trabajo", 666666666);
tels1.push(tel11);
// Pepito Grillo:
var fecha2 = new Date("2020-03-05");
var dirs2 = [];
var direccion21 = new direccion_1.direccion("Florencia", 69, 18, "D", 20000, "Lugar de la magia", "Nunca jamás");
dirs2.push(direccion21);
var mails2 = [];
var mail21 = new mail_1.mail("Trabajo", "pepe@grillos.illo");
mails2.push(mail21);
var tels2 = [];
var tel21 = new telefono_1.telefono("Personal", 666656656);
tels2.push(tel21);
//Oso Polar:
var fecha3 = new Date("2002-12-22");
var dirs3 = [];
var direccion31 = new direccion_1.direccion("Fantasía", 4, 3, "C", 70000, "Osezno", "Polo norte");
dirs3.push(direccion31);
var mails3 = [];
var mail31 = new mail_1.mail("Trabajo", "oso@ositos.itos");
mails3.push(mail31);
var tels3 = [];
var tel31 = new telefono_1.telefono("Trabajo", 666444666);
tels3.push(tel31);
var p1 = new persona_1.persona("Mujer", "Lobo", 25, "00000000A", fecha1, "Rojo sangre", 0, dirs1, mails1, tels1, "Habla por el día, aulla en la noche.");
var p2 = new persona_1.persona("Pepito", "Grillo", 3, "00000001B", fecha2, "Verde magia", 2, dirs2, mails2, tels2, "Disponible por las noches.");
var p3 = new persona_1.persona("Oso", "Polar", 20, "00000000A", fecha3, "Blanco roto", 1, dirs3, mails3, tels3, "Si no responde seguramente esté hibernando.");
agenda.push(p1, p2, p3);
function mostrar_personas(agenda) {
    for (var i = 0; i < agenda.length; i++) {
        console.log(agenda[i]);
        console.log("\n");
    }
}
;
console.log("Agenda:\n");
mostrar_personas(agenda);
console.log("El sexo de " + p1.get_persona() + " es " + p1.get_sexo + ".\n");
console.log("El sexo de " + p2.get_persona() + " es " + p2.get_sexo + ".\n");
console.log("El sexo de " + p3.get_persona() + " es " + p3.get_sexo + ".\n");
//funcion para buscar por dni
function buscar_personas_por_dni(agenda, dni) {
    var personas = agenda.filter(function (persona) { return persona.dni == dni; });
    return personas;
}
;
console.log("Resultados de la búsqueda de personas con dni 00000000A:\n");
mostrar_personas(buscar_personas_por_dni(agenda, "00000000A"));
//Añadir datos a la persona encontrada
var tel12 = new telefono_1.telefono("Personal", 666666665);
var mail12 = new mail_1.mail("Personal", "lobasexy@lobitas.itas");
var direccion12 = new direccion_1.direccion("Cueva", 1, 0, "A", 10001, "Donde siempre es denoche", "Roca verde");
var persona_encontrada = buscar_personas_por_dni(agenda, "00000000A")[0];
persona_encontrada.set_direccion(direccion12);
persona_encontrada.set_mail(mail12);
persona_encontrada.set_telefono(tel12);
console.log("Datos actualizados de la persona con dni 00000000A:\n");
console.log(persona_encontrada);
// Mostrar la agenda otra vez
console.log("Agendaa actualizada:\n");
mostrar_personas(agenda);
