import { Component} from '@angular/core';
import { TodosComponent } from './MyComponents/todos/todos.component';

@Component({
selector: 'app-root',
standalone:true,
imports: [TodosComponent],
templateUrl: './app.component.html',
styleUrl: './app.component.css'
})

export class AppComponent{
  title='External Template in Anular 17';
  constructor(){
  }
}