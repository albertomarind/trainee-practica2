import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { ServerComponent } from './server';
import { ProductComponent } from './product/product.component';
import { HeaderPrincipalComponent } from './header-principal/header-principal.component';
import { LoaderComponent } from './loader/loader.component';
import { ListaPersonasComponent } from './modulos/components/lista-personas/lista-personas.component';
import { PersonaModule } from './modulos/persona.module';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    ServerComponent,
    ProductComponent,
    HeaderPrincipalComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    PersonaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
