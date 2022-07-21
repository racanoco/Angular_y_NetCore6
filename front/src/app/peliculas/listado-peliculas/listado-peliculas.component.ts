import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }

  @Input()

  peliculas: any;
  title = '';

  // Inicializar el componente una vez ha recibido las propiedades de entrada
  ngOnInit(): void {  
  }

  // Eliminamos una pelicula del listado.
  removerPelicula(indicePelicula: number): void {
    this.peliculas.splice(indicePelicula, 1);
  }

}
