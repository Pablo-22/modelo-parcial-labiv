import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './Vistas/bienvenido/bienvenido.component';
import { BusquedaComponent } from './Componentes/busqueda/busqueda.component';
import { ActoresRoutingModule } from './Vistas/actor/actores-routing.module'
import { PeliculasRoutingModule } from './Vistas/pelicula/peliculas-routing.module';
import { TablaPeliculaComponent } from './Componentes/tabla-pelicula/tabla-pelicula.component';
import { TablaActorComponent } from './Componentes/tabla-actor/tabla-actor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    TablaActorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
