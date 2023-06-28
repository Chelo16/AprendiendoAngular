import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    { nombre:'Ignacio',
      especialidad:'HTML',
      descripcion:'Lorem Inpsun'
    },
    { nombre:'Maria',
      especialidad:'CSS',
      descripcion:'Lorem Inpsun'
    }
  ]

  constructor() {
    console.log('Funciona');
   }

  obtenerEquipo(){
    return this.equipo;
  }

  obtenerUno(i:number){
    return this.equipo[i];
  }
}
