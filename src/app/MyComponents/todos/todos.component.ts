import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,TodoItemComponent,AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor()
  { 
     this.todos=
     [
        {
          sno: 1,
          title: 'This is Title_1',
          desc: 'Description',
          active: true
        },
        {
          sno: 2,
          title: 'This is Title_2',
          desc: 'Description',
          active: true
        },
        {
          sno: 3,
          title: 'This is Title_3',
          desc: 'Description',
          active: false
        }
      ]
  }
  ngOnInit(): void {
  }
  deleteToDo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }
  addToDo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
  }
}
