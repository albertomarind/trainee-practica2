import { Producto } from './producto';
import { GenericService } from './generic-service';
export interface ProductoService extends GenericService<Producto> {
    findByName(name: string): Producto;
}