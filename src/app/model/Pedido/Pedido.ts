import { Producto } from './../Productos/Producto';
export class Pedido{
    ListaProductos:Producto[];
    folio:number;
    estatus:number;
    id_cliente_Pedido:number;
    precio:number;
}