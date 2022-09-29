import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {

	actorForm:FormGroup;

	constructor() { 
		this.actorForm = new FormGroup({
			nombre: new FormControl('PRUEBA', [Validators.required, Validators.required, Validators.maxLength(4)] ),
			apellido: new FormControl('', [Validators.required, Validators.required]),
			fechaNacimiento: new FormControl('', Validators.required),
			cantidadPeliculas: new FormControl(''),
			ciudadNatal: new FormControl('')
		});
	}

	ngOnInit(): void {
		console.log(this.actorForm)
	}
}
