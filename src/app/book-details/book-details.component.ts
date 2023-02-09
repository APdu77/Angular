import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Input() hello: any;
  @Input() subTitle: any;
  @Input() book: any;
  @Output()
  eventFromChild = new EventEmitter();

  constructor() {
    setTimeout(() => {
      console.log('hello -->', this.hello);
      console.log('subTitle -->', this.subTitle);
      this.eventFromChild.emit();
    }, 3000);
  }

}


