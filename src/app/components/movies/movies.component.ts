import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: Movie[] = [];
  selected!: Movie;

  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this._movieService
    .findAll()
    .subscribe(movies => {
      this.movies = movies;
    });
  }

  refreshList() {
    this._movieService.findAll();
  }
}
