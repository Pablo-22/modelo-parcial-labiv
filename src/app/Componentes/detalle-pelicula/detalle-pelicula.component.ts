import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Entidades/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

	@Input()
	pelicula:Pelicula = new Pelicula();

	constructor() { }

	ngOnInit(): void {
	}

	movieDate(fechaEstreno:any){
		if (fechaEstreno) {
			return fechaEstreno.toDate();
		}
		return '';
	}

}
