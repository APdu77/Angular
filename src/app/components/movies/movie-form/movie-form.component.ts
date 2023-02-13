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

  constructor(private _movieService: MovieService) {}
  
  onSubmit(form: NgForm) {
    if (form.valid) {
      const movie = new Movie(
        crypto.randomUUID(),
        form.value.title,
        form.value.desc,
        form.value.img,
      );
      this._movieService.create(movie);
      form.reset();
    }
  }
}
