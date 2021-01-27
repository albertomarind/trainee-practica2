import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { Auto } from '../auto';
import { Consulta } from '../consulta';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  producto: Producto;
  auto: Auto;
  consultaService: Consulta = new Consulta();

  constructor() {
    this.producto = {
      id: 1,
      nombre: 'zapatos',
      descripcion: 'descripcion de zapatos',
      activo: true,
      urlImagen: 'https://via.placeholder.com/75',
      precio: 5
    };
    this.auto = {
      id: 2,
      nombre: 'tsuru',
      descripcion: 'descripcion de tsuru',
      activo: true,
      urlImagen: 'https://via.placeholder.com/75',
      precio: 1000,
      color: 'rojo',
      numeroPuertas: 4,
      tipoMotor: 'v8'
    };
  }
  ngOnInit(): void {
    // let productos: Producto[] = this.consultaService.findAll();
  }


  onClick(event: MouseEvent): void {

  }

}
