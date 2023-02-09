import { Author } from './author';

export class Book {
  constructor(
    public id: string,
    public title: string,
    public author: Author,
    public desc: string,
    public price: number,
  ) {}
}
