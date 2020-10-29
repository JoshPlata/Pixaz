import { ProductoData } from './Productos-data';
import { Producto } from './Producto';

export class ProductoService {

    constructor() { }

    getProductos(): Producto[] {
        return ProductoData;
    }

    guardarProducto(producto: Producto){
        ProductoData.push(producto);
    }

    getid_producto(): Producto[] {
        return ProductoData;
    }

    getnombre(): Producto[] {
        return ProductoData;
    }

    getprecio(): Producto[] {
        return ProductoData;
    }

    gettipo(): Producto[] {
        return ProductoData;
    }

    getdescripcion(): Producto[] {
        return ProductoData;
    }

}