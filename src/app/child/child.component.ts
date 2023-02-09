import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() incrementCount = new EventEmitter();
  @Output() decrementCount = new EventEmitter();

  inc() {
    this.incrementCount.emit();
  }

  dec() {
    this.decrementCount.emit();
  }
}
