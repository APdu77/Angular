import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Output('eventDetected')
  emitter = new EventEmitter();

  constructor() {
    setTimeout(() => {
      this.emitter.emit();
    }, 3000);
  }
}
