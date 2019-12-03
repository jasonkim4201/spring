import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;

  // todos: Todos[] = [
  //   {id: 1, description: 'learn to code'},
  //   {id: 2, description: 'learn angular'},
  //   {id: 3, description: 'look spring security'}
  // ];
  // todo: Todos = {
  //   id: 1,
  //   description: 'learn to code'
  // };

  // [
  //   new Todo(1, 'learn to code', false, new Date()),
  //   new Todo(2, 'learn angular', false, new Date()),
  //   new Todo(3, 'look at spring security', false, new Date())
  // ];

  constructor(private todosService: TodoDataService,
              private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todosService.retreiveAllTodos('jasonkim').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id: number): void {
    console.log(`deleted id #${id}`);
    this.todosService.deleteTodo('jasonkim', id).subscribe(
      response => {
        console.log(response);
        this.message = `Todo ${id} delete sucessful!`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id: number): void {
    console.log(`todo #${id} has been clicked`);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

}
