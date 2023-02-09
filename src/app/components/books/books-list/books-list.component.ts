import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  @Input() books: any = [];
  @Output() bookEmitter = new EventEmitter();
}
