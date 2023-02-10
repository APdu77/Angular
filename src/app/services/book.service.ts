import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  books = [
    new Book(
      crypto.randomUUID(),
      "Mamba mentality",
      new Author('Kobe', 'Bryant'),
      "Mamba Mentality, c'est un voyage au coeur de l'état d'esprit légendaire qui a fait de Kobe Bryant l'un des plus grands basketteurs de l'histoire. Avec ses propres mots, Kobe nous livre ses secrets et partage sa science du jeu. De qui a-t-il appris ? Comment a-t-il joué malgré la douleur ?",
      25
    ),
    new Book(
      crypto.randomUUID(),
      "Misery",
      new Author('Stephen', 'King'),
      "Misery est un roman de Stephen King publié en 1987. Dans ce roman, un écrivain est recueilli après un grave accident par l'une de ses admiratrices, qui découvre que l'auteur a tué son personnage favori dans son nouveau livre et décide de le pousser à la ressusciter en employant des moyens extrêmes.",
      9
    ),
    new Book(
      crypto.randomUUID(),
      "Astérix : l'empire du milieu",
      new Author('Albert', 'Uderzo'),
      "Après un coup d'État qui a renversé l'impératrice, la princesse chinoise Fu Yi vient demander l'aide des irréductibles Gaulois, dont la réputation est connue jusqu'à Shanghai.",
      10
    )
  ];
}
