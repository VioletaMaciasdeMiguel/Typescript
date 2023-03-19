
export class telefono{
    tipo: any;
    numero: number;
    constructor(tipo:any, numero:number){
        this.numero = numero;
        this.tipo = tipo;
    }
    
    get_numero():void{
        console.log(this.numero);
    }
    set_numero(numero:number){
        this.numero = numero;
    }
    get_tipo():void{
        console.log(this.tipo);
    }
    set_tipo(tipo:any){
        this.tipo = tipo;
    }
}
