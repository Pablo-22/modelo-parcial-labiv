import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusquedaComponent } from './Componentes/busqueda/busqueda.component';
import { BienvenidoComponent } from './Vistas/bienvenido/bienvenido.component';

const routes: Routes = [
	{ 
		path: 'peliculas', loadChildren: () => import('./Vistas/pelicula/peliculas-routing.module').then(m => m.PeliculasRoutingModule) 
	},
	{ 
		path: 'actores', loadChildren: () => import('./Vistas/actor/actores-routing.module').then(m => m.ActoresRoutingModule) 
	},
	{path: 'busqueda', component: BusquedaComponent},
	{path: '**', component: BienvenidoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
