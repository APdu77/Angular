import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { MovieFormComponent } from './components/movies/movie-form/movie-form.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { MoviesComponent } from './components/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    HeaderComponent,
    FooterComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
