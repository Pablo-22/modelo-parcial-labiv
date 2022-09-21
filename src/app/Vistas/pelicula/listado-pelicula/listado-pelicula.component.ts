import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { PeliculasService } from 'src/app/Servicios/peliculas.service';

@Component({
  selector: 'app-listado-pelicula',
  templateUrl: './listado-pelicula.component.html',
  styleUrls: ['./listado-pelicula.component.css']
})
export class ListadoPeliculaComponent implements OnInit {

	public peliculas:Pelicula[] = [];

  	constructor(private _peliculas:PeliculasService) { 
		this._peliculas.getAll().subscribe(result => {
			this.peliculas = result;
		})
	}

	ngOnInit(): void {

	}

}
