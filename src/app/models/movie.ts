export class Movie {
  constructor(
    public id?: string,
    public title?: string,
    public desc?: string,
    public img?: string,
    public isEditable = false,
  ) {}
}
