import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  @Output() incrementCount = new EventEmitter();
  @Output() decrementCount = new EventEmitter();

  inc() {
    this.incrementCount.emit();
  }

  dec() {
    this.decrementCount.emit();
  }

  

}
