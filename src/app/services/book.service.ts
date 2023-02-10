import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public books = [
    new Book(
      crypto.randomUUID(),
      "Il était une fois",
      new Author("Coco", "COCO"),
      "Quos explicabo laudantium hic. Amet dolorem et in",
      15),
    new Book(
      crypto.randomUUID(),
      "Il était deux fois",
      new Author("Jaco", "JACO"),
      "Quos explicabo laudantium hic. Amet dolorem et in",
      76.5),
    new Book(
      crypto.randomUUID(),
      "Il était trois fois",
      new Author("Pedro", "PEDRO"),
      "Quos explicabo laudantium hic. Amet dolorem et in",
      2.3),
  ];
}
