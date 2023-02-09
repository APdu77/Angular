import { Author } from './author';

export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: Author,
  ) {}
}
