import { Producto } from './producto';
import { ProductoService } from './producto-service';
export class Consulta implements ProductoService {
    findByName(name: string): Producto {
        throw new Error('Method not implemented.');
    }
    save(e: Producto): Producto {
        throw new Error('Method not implemented.');
    }
    findById(id: number): Producto {
        throw new Error('Method not implemented.');
    }
    findAll(): Producto[] {
        throw new Error('Method not implemented.');
    }
    delete(id: number) {
        throw new Error('Method not implemented.');
    }
    update(e: Producto): Producto {
        throw new Error('Method not implemented.');
    }

}
