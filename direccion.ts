export class direccion{
    calle: string;
    numero: number;
    piso:number;
    letra:string;
    codigo_postal:number;
    poblacion:string;
    provincia:string;
    constructor(calle : string,
        numero: number,
        piso:number,
        letra:string,
        codigo_postal:number,
        poblacion:string,
        provincia:string) {
            this.calle = calle,
            this.numero = numero,
            this.piso = piso,
            this.letra = letra,
            this.codigo_postal = codigo_postal,
            this.poblacion = poblacion,
            this.provincia = provincia
        }
}
