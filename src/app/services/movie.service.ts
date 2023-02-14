import { Injectable } from '@angular/core';
import { Director } from '../models/director';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  _movies = [
    new Movie(
      crypto.randomUUID(),
      "Green Book",
      new Director('Peter', 'Farrelly'),
      "Mamba Mentality, Un videur italo-américain issu de la classe ouvrière devient le chauffeur d'un pianiste classique afro-américain pour une tournée des états du Sud américains des dans les années 60.",
      2018,
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91PWXIp8FOL._AC_SL1500_.jpg"
    ),
    new Movie(
      crypto.randomUUID(),
      "Les Gardiens de la Galaxie",
      new Director('James', 'Gunn'),
      "Un groupe de criminels intergalactiques sont obligés de travailler ensemble pour empêcher un guerrier fanatique de prendre le contrôle de l'univers.",
      2014,
      "https://fr.web.img5.acsta.net/pictures/14/08/04/15/09/405662.jpg"
    ),
    new Movie(
      crypto.randomUUID(),
      "Snatch",
      new Director('Guy', 'Ritchie'),
      "Des promoteurs de boxe sans scrupules, des bookmakers violents, un gangster russe, des voleurs amateurs incompétents et des bijoutiers soi-disant juifs se battent pour traquer un diamant volé à la valeur inestimable.",
      2000,
      "https://m.media-amazon.com/images/I/51uJdpxn7gL._AC_.jpg"
    )
  ];

  //protection de l'objet _movies, qui devient accessible en lecture uniquement depuis l'exterieur
  public get movies() {
    return [ ...this._movies ];
  }

  public addMovie (movieToAdd : Movie) {
    this._movies.push(movieToAdd);
    //this.movies.unshift(movieToAdd); pour ajouter le film au debut de ma liste
    console.log(this.movies.indexOf(movieToAdd));
  }

  //index en parametre
  public deleteByIndex(index: number) {
    this._movies.splice(index, 1);
  }

  //movie en parametre
  public deleteByMovie (movieToRemove : Movie) {
    this._movies.splice(this.movies.indexOf(movieToRemove),1);
  }
}
