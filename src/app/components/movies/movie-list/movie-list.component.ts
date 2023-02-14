import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() movies!: Movie[];
  @Output() movieSelected = new EventEmitter<Movie>();

  constructor(private _movieService: MovieService) {}

  onDelete(id?: string) {
    if (id) this._movieService.delete(id);
    //this.movies = this._movieService.movies;
  }
}
