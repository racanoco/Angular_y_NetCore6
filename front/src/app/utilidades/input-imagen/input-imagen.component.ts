import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { toBase64 } from '../helpers';

@Component({
  selector: 'app-input-imagen',
  templateUrl: './input-imagen.component.html',
  styleUrls: ['./input-imagen.component.scss']
})
export class InputImagenComponent implements OnInit {

  constructor() { }

  imagenBase64: string = '';

  @Output()
  archivoSeleccionado: EventEmitter<File> = new EventEmitter<File>();

  ngOnInit(): void {
  }
   
  changeFile(event: any){
    if(event.target.files.length > 0)
    {
      const fileSelected: File = event.target.files[0];
      toBase64(fileSelected).then((value: string) => this.imagenBase64 = value)
      .catch(error => console.log(error));  
      this.archivoSeleccionado.emit(fileSelected);
    }

  }

}
