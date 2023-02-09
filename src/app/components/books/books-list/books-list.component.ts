import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  @Input() books: any = [];

  onSelectBook(b: any) {
    console.log('Livre séléctionné --> ', b);
  }
}
