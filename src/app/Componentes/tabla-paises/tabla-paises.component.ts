import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaisesService } from 'src/app/Servicios/paises.service';


@Component({
	selector: 'app-tabla-paises',
	templateUrl: './tabla-paises.component.html',
	styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

	paises:any;

	constructor(private _paisesService:PaisesService) {
	}

	ngOnInit(): void {
		this._paisesService.paises$.subscribe(x => {
			this.paises = x;
		})
	}

}
