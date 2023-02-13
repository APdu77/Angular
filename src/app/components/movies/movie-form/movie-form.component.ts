import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Ajouter le film à la liste existante
      console.log(form.value);
    }
  }
}
