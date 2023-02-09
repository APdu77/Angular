import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  typeOfPerson = '';

  constructor() {
    setTimeout(() => this.typeOfPerson = 'child', 2000);
  }
}
