import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.scss']
})
export class InputMarkdownComponent implements OnInit {

  private contenidoMarkdown: string = '';

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  
  // Obtenemos el texto introducido del usuario del inputTextArea.
  inputTextArea(texto: any): void{
    this.contenidoMarkdown = texto.target.value;
    this.changeMarkdown.emit(texto.target.value);
  }

}
