export class Cliente {
    id?:number;
    correo:string;
    documento:string;
    nombreCompleto:string;
    tipoDocumento:string;
    telefono:string;


    constructor(correo:string, documento:string,nombreCompleto:string,tipoDocumento:string,telefono:string){
        this.correo = correo;
        this.documento = documento;
        this.nombreCompleto = nombreCompleto;
        this.tipoDocumento = tipoDocumento;
        this.telefono = telefono;
    }
}
