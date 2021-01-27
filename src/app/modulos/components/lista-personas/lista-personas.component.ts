import { Component, OnInit } from '@angular/core';
import { Persona } from '../../../persona';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  personas: Persona[];
  constructor() {
    this.personas = [
      { id: 1, nombre: 'jose', apellido: 'lopez', edad: 15, activo: true },
      { id: 2, nombre: 'pedro', apellido: 'lopez1', edad: 16, activo: true },
      { id: 3, nombre: 'luis', apellido: 'lopez2', edad: 17, activo: false },
      { id: 4, nombre: 'moises', apellido: 'lopez3', edad: 18, activo: true }
    ];
  }

  ngOnInit(): void {
  }

  eliminar(indice:number) {
    this.personas.splice(indice, 1);
  }

}
