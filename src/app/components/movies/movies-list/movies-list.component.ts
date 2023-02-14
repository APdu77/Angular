import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  @Input() movies!: Movie[];
  @Output() movieSelected = new EventEmitter<Movie>();

  constructor(private _movieService : MovieService) {}
  //deletebyIndex
  onDelete(index : number) {
    this._movieService.deleteByIndex(index);
    this.movies = this._movieService.movies;
  }
  //deletebyMovie
  onDelete2(movie : Movie) {
    this._movieService.deleteByMovie(movie);
    this.movies = this._movieService.movies;
  }
}
