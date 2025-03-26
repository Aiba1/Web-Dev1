import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Output() frontEvent = new EventEmitter<void>();

  images = [
    { name: 'Mobile phones', src: 'https://kaspi.kz/img/Phone.png' },
    { name: 'TV, Audio, Video', src: 'https://kaspi.kz/img/TV.png' },
    { name: 'Computers', src: 'https://kaspi.kz/img/Computer.png' }
  ];
  categories = [
    { name: }
  ]

  switchToFront() {
    this.frontEvent.emit(); // Notify parent component
  }
}
