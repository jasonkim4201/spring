import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todo } from '../models/Todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    // dont use strict !== here. browser doesn't like that

    if (this.id != -1) {
      this.todoService.retrieveTodo('jasonkim', this.id).subscribe(
        data => {
          console.log(data);
          this.todo = data;
        }
      );
    }
  }

  saveTodo(): void {
    if (this.id === -1) {
      // create a todo
      this.todoService.createTodo('jasonkim', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )

    } else {
      this.todoService.updateTodo('jasonkim', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    }
  }



}
