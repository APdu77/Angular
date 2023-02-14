import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _movies: Movie[] = [];
  private _baseUrl = 'http://localhost:3000/movies';

  constructor(private _http: HttpClient)  {}

  // GET /movies
  public findAll() {
    return this._http.get<Movie[]>(this._baseUrl);
  }

  // GET /movies/16
  public findMovieById(id: number) {
    this._http.get<Movie>(`${this._baseUrl}/${id}`)
      .subscribe(movie => {
        console.log(movie);
      });
  }

  // POST /movies
  // request body --> { ... } (movie)
  public create(movie: Movie) {
    this._http
    .post<Movie>(this._baseUrl, movie)
    .subscribe((created) => {
      console.log(created);
      });
    this._movies.unshift(movie);
  }

  // PUT /movies/16
  // request body --> { ... } (movie)
  public update(movie: Movie) {
    this._http
      .put<Movie>(`${this._baseUrl}/${movie.id}`, movie)
      .subscribe((updated) => {
      console.log(updated);
      });
    const index = this._movies.findIndex(m => m.id == movie.id);
    this._movies.splice(index, 1, movie);
  }

  // DELETE /movies/16
  public delete(id: string) {
    this._http.delete(`${this._baseUrl}/${id}`).subscribe();

    const index = this._movies.findIndex(m => m.id == id);
    this._movies.splice(index, 1);
  }
}
