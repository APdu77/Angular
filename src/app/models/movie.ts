import { Director } from "./director";

export class Movie {
    constructor(
        public id: string,
        public title: string,
        public director: Director,
        public synopsis: string,
        public year: number,
        public imageLink: string,
        public isEditable = false
      ) {}
}
