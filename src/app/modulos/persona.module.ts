import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';



@NgModule({
  declarations: [
    ListaPersonasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListaPersonasComponent
  ]
})
export class PersonaModule { }
