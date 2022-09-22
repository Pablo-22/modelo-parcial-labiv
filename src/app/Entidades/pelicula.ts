import { Timestamp } from "firebase/firestore";

export class Pelicula {
	id:string = '';
	nombre:string = '';
	tipo:'terror'|'comedia'|'amor'|'otros'|'' = '';
	fechaEstreno:Timestamp = new Timestamp(0, 0);
	cantidadPublico:number = 0;
	fotoPelicula:string = '';
}
