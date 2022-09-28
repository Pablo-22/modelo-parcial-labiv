import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { PeliculasService } from 'src/app/Servicios/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

	pelicula:Pelicula = new Pelicula();

	constructor(private _peliculasService:PeliculasService) { }

	ngOnInit(): void {
	}

	onMovieSelected($event:any){
		this.pelicula = $event;
	}

	onDelete(){
		console.log(this.pelicula);
		this._peliculasService.delete(this.pelicula.id);
		this.pelicula = new Pelicula();
	}

	onModify(){
		this._peliculasService.update(this.pelicula);
	}

}
