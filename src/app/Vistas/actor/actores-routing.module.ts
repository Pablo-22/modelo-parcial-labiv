import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActorComponent } from './alta-actor/alta-actor.component';
import { ListadoActorComponent } from './listado-actor/listado-actor.component';

const routes: Routes = [
	{ path: 'alta-actor', component: AltaActorComponent },
	{ path: 'listado-actor', component: ListadoActorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActoresRoutingModule { }
