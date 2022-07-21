import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero-modelos/genero-creacion-dto';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.scss']
})
export class FormularioGeneroComponent implements OnInit {
  [x: string]: any;

  constructor(private formBuilder: FormBuilder) { }

  formGroup: FormGroup | any;

  @Input()
  modeloGeneroCreacionDTO: generoCreacionDTO | any;

  @Output()
  submit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  ngOnInit(): void {
    // Formulario reactivo
    this.formGroup = this.formBuilder.group({
      nombre:['', {
        validators:[
          Validators.required, 
          Validators.minLength(3),
        primeraLetraMayuscula()]
      }]
    });

    if(this.modeloGeneroCreacionDTO !== undefined){
      this.formGroup.patchValue(this.modeloGeneroCreacionDTO);
    }
   
  }  

  guardarCambios(){
    this.submit.emit(this.formGroup.value);
  }

  obtenerErrorCampoNombre(){    
    var campoNombre = this.formGroup.get('nombre');
    
    if(campoNombre.hasError('required')){
      return 'El campo nombre es requerido';
    }

    if(campoNombre.hasError('minlength')){
      return 'La longitud mínima es de 3 caracteres';
    }

    if(campoNombre.hasError('primeraLetraMayuscula')){
      return campoNombre.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }
}
