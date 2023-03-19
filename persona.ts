import { direccion } from "./direccion";
import { mail } from "./mail";
import { telefono } from "./telefono";



interface IPersona {
    get_dni():void;
    set_direccion(direccion:direccion):void;
    set_mail(mail:mail):void;
    set_telefono(telefono:telefono):void;
    get_persona():string;
    get_sexo():string;
}

export class persona implements IPersona{
    nombre:string;
    apellidos:string;
    edad:number;
    dni:string;
    cumpleaños:Date;
    color_fav: string;
    sexo: string;
    direcciones: direccion[] = [];
    mails: mail[] = [];
    telefonos: telefono[] = [];
    notas: string;
    constructor(nombre:string, 
        apelllidos:string, 
        edad:number, 
        dni:string,
        cumpleaños:Date, 
        color_fav:string, 
        sexo: number,
        direcciones: direccion[],
        mails: mail[],
        telefonos: telefono[],
        notas: string){
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
        };
        
        get_dni():void{
            console.log(this.dni);
        };

        get_persona():string{
            return this.nombre + " " + this.apellidos;
        }
        
        get_sexo():string{
            return this.sexo;
        };

        set_direccion(direccion:direccion){
            this.direcciones.push(direccion);
        };
        set_mail(mail:mail){
            this.mails.push(mail);
        };
        set_telefono(telefono:telefono){
            this.telefonos.push(telefono);
        };

    }
    enum enum_sexo{mujer, hombre, otro}
