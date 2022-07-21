import { Component, OnInit } from '@angular/core';
import { actorCreacionDTO } from '../actor-creacion-dto';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.scss']
})
export class CrearActorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(actorCreacion: actorCreacionDTO){
    console.log(actorCreacion);
  }

}
