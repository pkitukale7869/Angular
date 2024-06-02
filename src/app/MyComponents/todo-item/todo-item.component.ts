import { Component, Input, OnInit,Output,EventEmitter  } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor(){
    
  }
  ngOnInit(): void {
  }
  onclick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("Deleted the event")
  }

}
