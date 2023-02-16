import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit /*impplementation facultative*/ {
  todos$: BehaviorSubject<Todo[]> = this._todoService.todos$;
  toCreate: Todo = {};

  private _subscription?: Subscription;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this._todoService.findAll().subscribe();
  }



  changeStatus(todo: Todo) {
    todo.done = !todo.done;
    this._todoService.editOne(todo).subscribe();
    //test du FindById
    if (todo.id) {
      this._todoService.findById(todo.id).subscribe(console.log);
    }
  }

  createTodo() {
    if (this.toCreate.text) {
      this._todoService
        .createOne(this.toCreate)
        .subscribe(() => {
          this.toCreate.text = '';
        });
    }
  }

  onSubmit(formItem: NgForm) {
    if (formItem.valid) {
      this._todoService
        .createOne(formItem.value)
        .subscribe(() => {
          formItem.reset();
        });
    }
  }

  onEdit(todo: Todo) {
    todo.isEditable = !todo.isEditable;
    if (!todo.isEditable) {
      this._todoService
        .editOne(todo)
        .subscribe();
    }
  }

  onDelete(id?: string) {
    if (id) {
      this._todoService.
        deleteOne(id)
        .subscribe();
    }

  }
}