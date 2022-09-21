import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPeliculaComponent } from './alta-pelicula/alta-pelicula.component';
import { ListadoPeliculaComponent } from './listado-pelicula/listado-pelicula.component';

const routes: Routes = [
	{ path: 'alta-pelicula', component: AltaPeliculaComponent },
	{ path: 'listado-pelicula', component: ListadoPeliculaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
