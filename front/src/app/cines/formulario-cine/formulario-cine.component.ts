import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineCreacionDTO } from '../interfaces/cine';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.scss']
})
export class FormularioCineComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder) { }

  form: FormGroup | any;
  
  @Input()
  modeloCineCreacion!: cineCreacionDTO | cineCreacionDTO;

  @Output()
  GuardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });

    if(this.modeloCineCreacion !== undefined){
      this.form.patchValue(this.modeloCineCreacion);
    }
  }

  onSubmit(){
    this.GuardarCambios.emit(this.form.value);    
  }

}
