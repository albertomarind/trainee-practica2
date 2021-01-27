import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cap2';
  arreglo: number[] = [];
  constructor() {
    for (let index = 0; index < 5; index++) {
      this.arreglo.push(index);
    }
  }

  agregarElemento() {
    this.arreglo.push(this.arreglo.length);
  }
}
