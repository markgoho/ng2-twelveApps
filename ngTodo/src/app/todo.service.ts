import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  getTodos() {
    return this.http.get('/api/v1/todos')
      .map(res => res.json());
  }

  saveTodo(todo) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/v1/todo', JSON.stringify(todo), {headers})
      .map(res => res.json());
  }

  updateTodo(todo) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`api/v1/todo/${todo._id}`, JSON.stringify(todo), {headers})
      .map(res => res.json());
  }

}
