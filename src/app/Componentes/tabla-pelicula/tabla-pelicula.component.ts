import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';
import { PeliculasService } from 'src/app/Servicios/peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {


	public peliculas:Pelicula[] = [];

	@Output('movieSelected')
	movieSelected = new EventEmitter<Pelicula>();

	constructor(private _peliculas:PeliculasService) { 
		this._peliculas.getAll().subscribe(result => {
			this.peliculas = result;
	})
  }

	ngOnInit(): void {
	}

	onMovieSelected(pelicula:Pelicula) {
		this.movieSelected.emit(pelicula);
	}

	movieDate(fechaEstreno:any){
		if (fechaEstreno) {
			return fechaEstreno.toDate();
		}
		return '';
	}

}


