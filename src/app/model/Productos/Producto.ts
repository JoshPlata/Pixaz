export class Producto{
    
    id_producto:number;
    nombre: string;
    precio: number;
    tipo: string;
    descripcion:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}