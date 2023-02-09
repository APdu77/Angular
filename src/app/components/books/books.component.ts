import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books = [
    {
      id: 1,
      title: "Il était une fois",
      author: {
        fn: 'Coco',
        ln: 'COCO'
      },
      desc: 'Quos explicabo laudantium hic. Amet dolorem et in et quibusdam eligendi provident ipsam. Et ipsa nulla aspernatur quisquam facilis nulla beatae eveniet. Voluptates voluptatum laudantium eligendi nihil fugit nulla molestias. Deleniti magni rem nihil repellat esse et omnis deleniti dolores.',
      price: 15,
      avaible: true,
    },
    {
      id: 2,
      title: "Il était deux fois",
      author: {
        fn: 'Jaco',
        ln: 'JACO'
      },
      desc: 'Quos explicabo laudantium hic. Amet dolorem et in et quibusdam eligendi provident ipsam. Et ipsa nulla aspernatur quisquam facilis nulla beatae eveniet. Voluptates voluptatum laudantium eligendi nihil fugit nulla molestias. Deleniti magni rem nihil repellat esse et omnis deleniti dolores.',
      price: 76.5,
      avaible: false,
    },
    {
      id: 3,
      title: "Il était trois fois",
      author: {
        fn: 'Pedro',
        ln: 'PEDRO'
      },
      desc: 'Quos explicabo laudantium hic. Amet dolorem et in et quibusdam eligendi provident ipsam. Et ipsa nulla aspernatur quisquam facilis nulla beatae eveniet. Voluptates voluptatum laudantium eligendi nihil fugit nulla molestias. Deleniti magni rem nihil repellat esse et omnis deleniti dolores.',
      price: 2.3,
      avaible: true,
    },
  ];
  selected: any;
}
