  // Componente de ejemplo sobre los Ciclos de vida de Angular.  
  // OnInit : Utilizamos principalmente para inicializar un componente.
  // OnChanges: Se dispara cuando son modificados los parámetros de un componente desde afuera.
  // OnDestroy: Es llamado justo antes de que un componente sea destruido.
  // DoCheck: Es llamado cada vez que el detector de cambios de Angular es ejecutado.
  // AfterViewInit: Permite ejecutar funcionalidad cuando los componentes hijos han sido renderizados.
  // AfterViewCheched: Es como un DoCheck para los componentes hijos.
  // AfterContentInit: Se ejecuta luego de que el contenido proyectado en el componente ha sido inicializado.
  // AfterContentChecked: Es como un DoCheck para los componentes proyectados.

import { AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.scss']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  @Input()
  title: string = '';


  @ViewChild(RatingComponent)
  ratingComponent: RatingComponent | any;

  timer: ReturnType<typeof setInterval> | any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('on destroy');
    clearInterval(this.timer);
  }

  ngDoCheck(): void {
    console.log('on do check');
  }

  ngAfterViewInit(): void {
    console.log('on after view init');
    this.ratingComponent.ratingSelected = 3;
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    console.log('on init');
    this.timer = setInterval(() => console.log(new Date()),1000);
  }

}
