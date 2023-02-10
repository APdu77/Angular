import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { BookDetailsComponent } from './components/books/book-details/book-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksListComponent,
    BookDetailsComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
