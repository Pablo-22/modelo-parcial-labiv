export class Pelicula {
	id:string = '';
	nombre:string = '';
	tipo:'terror'|'comedia'|'amor'|'otros'|'' = '';
	fechaEstreno:Date = new Date();
	cantidadPublico:number = 0;
	fotoPelicula:string = '';
}
