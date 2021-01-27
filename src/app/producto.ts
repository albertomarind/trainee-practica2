export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    activo: boolean;
    urlImagen: string;
    precio: number | string;
    [name: string]: any;
}
