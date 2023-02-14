import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _movies: Movie[] = [];

  // GET /movies
  public get movies() {
    return [ ...this._movies ];
  }

  // GET /movies/16
  public findMovieById(id: number) {
  }

  // POST /movies
  // request body --> { ... } (movie)
  public create(movie: Movie) {
    this._movies.unshift(movie);
  }

  // PUT /movies/16
  // request body --> { ... } (movie)
  public update(movie: Movie) {
    const index = this._movies.findIndex(m => m.id == movie.id);
    this._movies.splice(index, 1, movie);
  }

  // DELETE /movies/16
  public delete(index: number) {
    this._movies.splice(index, 1);
  }
}
