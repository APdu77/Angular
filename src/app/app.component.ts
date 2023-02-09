import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greetings="Bonjour a tous"
  subTitleParent="My subtitle"
  bookParent = {
    title:"Les 1001 nuits",
    pages:"252"
  }
  test="Premiere valeur"
  count= 0 ;

  inc() {
    this.count ++;
  }
  logged = false;
  typeOfPerson = '';

  constructor() {
    setTimeout(() => { this.logged = true }, 2000);
    setTimeout(() => this.typeOfPerson = 'child', 2000);
  }
}
