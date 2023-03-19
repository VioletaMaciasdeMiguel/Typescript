import { direccion } from "./direccion";
import { mail } from "./mail";
import { telefono } from "./telefono";
import { persona } from "./persona";

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
let agenda: persona[] = [];

//Creo los datos de las 3 personas iniciales de mi agenda:
// Mujer Lobo:
let fecha1 = new Date("1998-01-11");
let dirs1: direccion[] = [];
let direccion11 = new direccion("Cueva", 2,0,"C",10000,"Donde nunca se pone el sol","Roca azul");
dirs1.push(direccion11);
let mails1: mail[] = [];
let mail11 = new mail("Trabajo", "loba@lobito.ito");
mails1.push(mail11);
let tels1: telefono[] = [];
let tel11 = new telefono("Trabajo", 666666666);
tels1.push(tel11);

// Pepito Grillo:
let fecha2 = new Date("2020-03-05");

let dirs2: direccion[] = [];
let direccion21 = new direccion("Florencia", 69,18,"D",20000,"Lugar de la magia","Nunca jamás");
dirs2.push(direccion21);
let mails2: mail[] = [];
let mail21 = new mail("Trabajo", "pepe@grillos.illo");
mails2.push(mail21);
let tels2: telefono[] = [];
let tel21 = new telefono("Personal", 666656656);
tels2.push(tel21);

//Oso Polar:
let fecha3 = new Date("2002-12-22");

let dirs3: direccion[] = [];
let direccion31 = new direccion("Fantasía", 4, 3,"C",70000,"Osezno","Polo norte");
dirs3.push(direccion31)
let mails3: mail[] = [];
let mail31 = new mail("Trabajo", "oso@ositos.itos");
mails3.push(mail31);
let tels3: telefono[] = [];
let tel31 = new telefono("Trabajo", 666444666);
tels3.push(tel31);

let p1 = new persona("Mujer", "Lobo", 25, "00000000A", fecha1,"Rojo sangre",0,dirs1, mails1, tels1, "Habla por el día, aulla en la noche.");
let p2 = new persona("Pepito", "Grillo", 3, "00000001B", fecha2,"Verde magia",2,dirs2, mails2, tels2, "Disponible por las noches.");
let p3 = new persona("Oso", "Polar", 20, "00000000A", fecha3,"Blanco roto",1,dirs3, mails3, tels3, "Si no responde seguramente esté hibernando.");

agenda.push(p1, p2, p3);

function mostrar_personas(agenda : persona[]){
    for (let i = 0; i < agenda.length; i++) {
        console.log(agenda[i]);
        console.log("\n");
    }
};

console.log("Agenda:\n");
mostrar_personas(agenda);
// Usar get sexo
console.log("El sexo de " + p1.get_persona() + " es " + p1.get_sexo + ".\n");
console.log("El sexo de " + p2.get_persona() + " es " + p2.get_sexo + ".\n");
console.log("El sexo de " + p3.get_persona() + " es " + p3.get_sexo + ".\n");

//Funcion para buscar por dni
function buscar_personas_por_dni(agenda: persona[], dni:string){
  let personas : persona[] = agenda.filter(persona => persona.dni == dni);
  return personas;
};
console.log("Resultados de la búsqueda de personas con dni 00000000A:\n");
mostrar_personas(buscar_personas_por_dni(agenda, "00000000A"));

//Añadir datos a la persona encontrada
let tel12 = new telefono("Personal", 666666665);
let mail12 = new mail("Personal", "lobasexy@lobitas.itas");
let direccion12 = new direccion("Cueva", 1,0,"A",10001,"Donde siempre es denoche","Roca verde");

let persona_encontrada = buscar_personas_por_dni(agenda, "00000000A")[0];
persona_encontrada.set_direccion(direccion12);
persona_encontrada.set_mail(mail12);
persona_encontrada.set_telefono(tel12);

console.log("Datos actualizados de la persona con dni 00000000A:\n");
console.log(persona_encontrada);

// Mostrar la agenda otra vez
console.log("Agendaa actualizada:\n");
mostrar_personas(agenda);