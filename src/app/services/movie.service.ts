import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _movies: Movie[] = [
    new Movie(
      crypto.randomUUID(),
      'Il était une fois',
      'Earum explicabo possimus dolorem velit necessitatibus quibusdam mollitia voluptatem.',
      'http://placeimg.com/640/480/abstract'
    ),
    new Movie(
      crypto.randomUUID(),
      'Biographie d\'un géologue',
      'Omnis eum commodi voluptatum sunt odit dolor ex.',
      'http://placeimg.com/640/480/food'
    ),
    new Movie(
      crypto.randomUUID(),
      'Il était une fois',
      'Voluptatem delectus qui eos error. Et accusamus et.',
      'http://placeimg.com/640/480/business'
    ),
  ];

  public get movies() {
    return [ ...this._movies ];
  }

  public create(movie: Movie) {
    this._movies.unshift(movie);
  }

  public delete(index: number) {
    this._movies.splice(index, 1);
  }
}
