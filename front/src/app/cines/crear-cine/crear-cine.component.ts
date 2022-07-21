import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO } from '../interfaces/cine';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.scss']
})
export class CrearCineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(cineCreacion: cineCreacionDTO){    
    console.log(cineCreacion);
  }

}
