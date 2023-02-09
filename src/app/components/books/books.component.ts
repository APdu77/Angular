import { Component } from '@angular/core';
import { Author } from 'src/app/models/author';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  description = "Quos explicabo laudantium hic. Amet dolorem et in et quibusdam eligendi provident ipsam. Et ipsa nulla aspernatur quisquam facilis nulla beatae eveniet.";
  books = [
    new Book(
      crypto.randomUUID(),
      "Il était une fois",
      new Author("Coco", "COCO"),
      this.description,
      15),
    new Book(
      crypto.randomUUID(),
      "Il était deux fois",
      new Author("Jaco", "JACO"),
      this.description,
      76.5),
    new Book(
      crypto.randomUUID(),
      "Il était trois fois",
      new Author("Pedro", "PEDRO"),
      this.description,
      2.3),
  ];
  selected: any;
}
