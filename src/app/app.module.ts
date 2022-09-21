import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './Vistas/bienvenido/bienvenido.component';
import { BusquedaComponent } from './Componentes/busqueda/busqueda.component';
import { TablaPeliculaComponent } from './Componentes/tabla-pelicula/tabla-pelicula.component';
import { TablaActorComponent } from './Componentes/tabla-actor/tabla-actor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { ListadoPeliculaComponent } from './Vistas/pelicula/listado-pelicula/listado-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    TablaActorComponent,
	ListadoPeliculaComponent,

  ],
  imports: [
    BrowserModule,
	CommonModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
