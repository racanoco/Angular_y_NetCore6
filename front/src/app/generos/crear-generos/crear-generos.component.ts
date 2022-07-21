import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero-modelos/genero-creacion-dto';


@Component({
  selector: 'app-crear-generos',
  templateUrl: './crear-generos.component.html',
  styleUrls: ['./crear-generos.component.scss']
})
export class CrearGenerosComponent {

  constructor(private router: Router) { }

  guardarCambios(genero: generoCreacionDTO){
    // ... guardar los cambios.
    console.log(genero);
    this.router.navigate(['/generos'])
  }

}
