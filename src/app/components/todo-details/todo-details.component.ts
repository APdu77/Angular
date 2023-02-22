import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  todoId!:string ;

  //_route du composant
  constructor(
    private _route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    //valeur a un momemt donne (gel)
    //this._route.snapshot.params['id'];
    //this._route.snapshot.queryParams['name'];

    //abonnement a la valeur => surveillance
    this._route.params.subscribe((params: any) => {
      this.todoId = params.id;
    });
    this._route.paramMap.subscribe((paramMap: any) => {
      console.log(paramMap.get('id'));
    });
    //ce qui vient apres ? dans l'URL
    this._route.queryParams.subscribe((query: any) => {
      console.log(query.name);
    });
    this._route.queryParamMap.subscribe((queryMap: any) => {
      console.log(queryMap.get('name'));
    });
    //ce qui vient apres # dans l'URL (ancre)
    this._route.fragment.subscribe((fragment: any) => {
      console.log(fragment);
    });
  }
}
