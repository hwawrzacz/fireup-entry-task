import { Component, OnInit } from '@angular/core';
import { OverlayImage } from 'src/app/model/overlay-image';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private readonly _overlayImages: OverlayImage[] = [
    {
      imageUrl: 'assets/images/buildings/eiffel_tower.jpg',
      imageAltText: 'Eiffel Tower',
      direction: 'right'
    },
    {
      imageUrl: 'assets/images/buildings/statue.jpg',
      imageAltText: 'Statue of Liberty',
      direction: 'left'
    },
  ];

  get overlayImages(): OverlayImage[] {
    return this._overlayImages;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
