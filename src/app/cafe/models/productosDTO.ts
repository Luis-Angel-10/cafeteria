export interface AbastecimientosDTO {
    id: number;
    nombre: string;
    descripcion: string;
    origen: string;
    tipoGrano: string;
    tueste: string;
    stock: number;
    precio: number;
    fechaRegistro: Date;
}