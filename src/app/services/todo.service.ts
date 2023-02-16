import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _baseUrl = 'http://localhost:3000/todos' ;

  public todos$ = new BehaviorSubject<Todo[]>([]);
  //uniquement pour le FindById
  public todo$ = new BehaviorSubject<Todo>({});

  constructor(private _http: HttpClient) {}

  findAll(): Observable<Todo[]> {
    return this._http
    .get<Todo[]>(this._baseUrl)
    .pipe(
      tap(todos1 => this.todos$.next(todos1))
    );
  }

  findById(id : string) {
    return this._http
      .get<Todo>(`${this._baseUrl}/${id}`)
      .pipe(
        tap(todo => console.log('v1'+this.todos$.value.find(todo => todo.id == id))),
        tap(todo => console.log(todo)),
        tap(todo => this.todo$.next(todo))
    );
  }

  createOne(todo : Todo) {
    return this._http
    .post<Todo>(`${this._baseUrl}`, todo)
    .pipe(
      tap(todoCreated => this.todos$.next(
        [ todoCreated, ...this.todos$.value ]
        ))
    );
  }

  editOne(todo : Todo) {
    return this._http
    .put<Todo>(`${this._baseUrl}/${todo.id}`, todo)
    .pipe(
      tap(todoUpdated => {
          const todos = this.todos$.value;
          todos.splice(
            this.todos$.value.findIndex(t => t.id == todo.id),
            1,
            todoUpdated
          );
          this.todos$.next([ ...todos ]);
        })
    );
  }

  //(updated) => {
   // const index = this.todos.findIndex(t => t.id == updated.id);
  //  this.todos.splice(index, 1, updated);
 // }

  deleteOne(id : string) {
    return this._http
      .delete<Todo>(`${this._baseUrl}/${id}`)
      .pipe(
        tap(() => this.todos$.next(
          this.todos$.value.filter(t => t.id != id)
        ))
      );
  }
}
