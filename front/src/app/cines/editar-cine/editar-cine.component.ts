import { Component, Input, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../interfaces/cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.scss']
})
export class EditarCineComponent implements OnInit {

  constructor() { }

  @Input()
  modelo: cineDTO = {nombre: "Sambil", latitud: 41.59926310859698, longitud: -2.2915935516357426};

  ngOnInit(): void {
  }

  guardarCambios(cineCreacion: cineCreacionDTO){
    console.log(cineCreacion);
  }

}
