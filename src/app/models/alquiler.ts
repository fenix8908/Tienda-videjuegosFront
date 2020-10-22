export class Alquiler {

    fechaAlquiler: Date;
    fechaEntrega: Date;
    precioAlquiler: number;
    id_cliente: number;
    id_juego: number;

    constructor(fechaAlquiler: Date, fechaEntrega: Date, precioAlquiler: number, id_cliente: number, id_juego: number) {
        this.fechaAlquiler = fechaAlquiler;
        this.fechaEntrega = fechaEntrega;
        this.precioAlquiler = precioAlquiler;
        this.id_cliente = id_cliente;
        this.id_juego = id_juego
    }
}
