export class Alquiler {

    fechaAlquiler: Date;
    fechaEntrega: Date;
    precioAlquiler: number;
    

    constructor(fechaAlquiler: Date, fechaEntrega: Date, precioAlquiler: number) {
        this.fechaAlquiler = fechaAlquiler;
        this.fechaEntrega = fechaEntrega;
        this.precioAlquiler = precioAlquiler;
       
    }
}
