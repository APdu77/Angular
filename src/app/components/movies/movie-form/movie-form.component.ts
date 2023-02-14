import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnChanges {
  @Input() toEdit?: Movie;
  @Output() refreshListEmitter = new EventEmitter();

  movie = new Movie();

  constructor(private _movieService: MovieService) {}

  ngOnChanges() {
    if (this.toEdit) this.movie = this.toEdit as Movie;
    else this.movie = new Movie();
  }
  
  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.toEdit) {
        this._movieService.update(
          { ...this.movie, id: this.toEdit.id }
        );
      }
      else {
        this._movieService.create(
          { ...this.movie, id: crypto.randomUUID() }
        );
      }
      this.refreshListEmitter.emit();
      this.loadCreationForm();
      form.reset();
    }
  }

  loadCreationForm() {
    this.movie = new Movie();
    this.toEdit = undefined;
  }
}
