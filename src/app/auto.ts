import { Producto } from './producto';
export interface Auto extends Producto {
    tipoMotor: string;
    color: string;
    numeroPuertas: number;
    estaImportado?: boolean;
}