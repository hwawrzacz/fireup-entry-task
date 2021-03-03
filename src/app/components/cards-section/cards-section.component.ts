import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.scss']
})
export class CardsSectionComponent implements OnInit {
  private _cards: Card[] = [
    {
      imageUrl: 'assets/images/people/boy.jpg',
      imageAltText: 'Boy with a helmet',
      imageStyle: 'polygon',
      colorClass: 'red'
    },
    {
      imageUrl: 'assets/images/people/girl.jpg',
      imageAltText: 'Girl rollerblading',
      imageStyle: 'polygon',
      colorClass: 'lagoon',
    },
    {
      imageUrl: 'assets/images/people/woman.jpg',
      imageAltText: 'Woman walking',
      caption: 'Box caption',
      imageStyle: 'circle',
      colorClass: 'green',
    },
    {
      imageUrl: 'assets/images/people/man.jpg',
      imageAltText: 'Man running',
      caption: 'Box caption',
      imageStyle: 'circle',
      colorClass: 'yellow',
    },
  ];

  get cards(): Card[] {
    return this._cards;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
