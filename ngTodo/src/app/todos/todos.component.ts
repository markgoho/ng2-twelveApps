import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = [];
    this.todoService.getTodos()
      .subscribe(
        todos => this.todos = todos,
        err => console.error(err)
      );
  }

}
