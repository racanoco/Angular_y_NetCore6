import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO } from '../actor-creacion-dto';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.scss']
})

export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute ) { }

  modeloCreacionDTO = {nombre: 'Raúl', fechaNacimiento: new Date()}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // alert(params["id"]);
    })
  }

  guardarCambios(actorCreacion: actorCreacionDTO){
    console.log(actorCreacion);
  }

}
