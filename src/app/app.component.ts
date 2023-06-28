import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo1';
  total:number = 0;
  show:boolean = true;
  showDos:boolean = false;
  activo:any = 'segundo';
  animales:Array<any> = [
    {tipo:'Perro',nombre:'Lisa',edad:10},
    {tipo:'Gato',nombre:'Paco',edad:3},
    {tipo:'Pajaro',nombre:'Juan',edad:13}
  ];
}
