import { Component, OnInit } from '@angular/core';
import { generoCreacionDTO } from '../genero-modelos/genero-creacion-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.scss']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router: Router) { }

  modeloGeneroCreacionDTO = {nombre: 'Drama'};

  ngOnInit(): void {
  }

  guardarCambios(genero: generoCreacionDTO){
    // ... guardar los cambios.
    console.log(genero);
    this.router.navigate(['/generos'])
  }

}
