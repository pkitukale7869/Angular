import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  title: any;
  desc: any;

onSubmit() {
  const todo={
    sno:4,
    title: this.title,
    desc:this.desc,
    active:true
  }
  this.todoAdd.emit(todo);
}
}
