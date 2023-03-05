import { Component } from '@angular/core';
import { Tarea } from './interfaces/tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: Tarea[] = [{
    nombre: '',
    prioridad: '', 
    tiempo: 0,
  }]

  guardarTarea($event: Tarea){
    console.log($event);
    this.tareas.push({...$event});
    console.log(this.tareas)
  }
}
