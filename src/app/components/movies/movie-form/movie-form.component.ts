import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  constructor(private _movieService : MovieService) {}
  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.valid){
      const newMovie = new Movie(
        crypto.randomUUID(), 
        form.value.title,
      {
        fn: form.value.directorFn,
        ln: form.value.directorLn,
      },
      form.value.synopsis,
      form.value.year,
      form.value.imageLink
      );
    this._movieService.addMovie (newMovie);
    form.reset();
    }
  }
}
