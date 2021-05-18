export class Proveedor {
    id?: string;
    nombre: string;
    fechaCreacion: Date;
    direccion: string;
    region: string;
    comuna: string;

    constructor(){
        this.nombre = '';
        this.fechaCreacion = new Date();
        this.direccion = '';
        this.region = '';
        this.comuna = '';
    } 
}