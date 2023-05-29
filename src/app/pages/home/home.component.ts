import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
	imports: [NgbCarouselModule, NgIf, MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  cards = [
    { title: 'Card 1', subtitle: '¡Novedad!', id: 1, content: 'Polera rosada con mangas de encaje', imageUrl: 'https://i.ibb.co/tBmqBY8/ej-blusa.jpg', precio: 50, talla: 'M'},
    { title: 'Card 2', subtitle: '¡Novedad!', id: 2, content: 'Polera rosada con mangas de encaje', imageUrl: 'https://i.ibb.co/tBmqBY8/ej-blusa.jpg', precio: 50, talla: 'M' },
    { title: 'Card 3', subtitle: '¡Novedad!', id: 3, content: 'Polera rosada con mangas de encaje', imageUrl: 'https://i.ibb.co/tBmqBY8/ej-blusa.jpg', precio: 50, talla: 'M' }
  ];
}
