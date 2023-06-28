import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {

  equipo:any= [];

  constructor(private ruta:ActivatedRoute,
    private _servicio:EquipoService){
      //Con Activated Ruta leemos el url y cohemos el id
    this.ruta.params.subscribe(params=>{
      this.equipo = this._servicio.obtenerUno(params['id']);
    })
    
  }
}
