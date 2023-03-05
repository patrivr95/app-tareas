import { Component, Input} from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  @Input() tareas!: Tarea[];

  suma: number = 0

  constructor(){
    
  }

  ngDoCheck(){
    this.suma = 0;
    this.tareas.forEach(tarea =>
      this.suma += tarea.tiempo)
  }
}
