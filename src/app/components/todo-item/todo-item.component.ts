import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass'],
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() {}

  ngOnInit(): void {}

  //Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }
  onToggle(todo: Todo) {
    todo.completed = !todo.completed;
  }
  onDelete(todo: Todo) {
    console.log('delete');
  }
}
