import { Component, Output, EventEmitter } from '@angular/core';
import { isThisTypeNode } from 'typescript';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() enviar: EventEmitter<Tarea>

  tarea: Tarea = {
    nombre: '',
    prioridad: '',
    tiempo: 0,
  }

  constructor(){
    this.enviar = new EventEmitter()
  }


  guardar(){
    this.enviar.emit(this.tarea);
    this.tarea ={nombre: '', prioridad: '', tiempo: 0}
  }
}
