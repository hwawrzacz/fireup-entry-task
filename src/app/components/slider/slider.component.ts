import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCarouselComponent } from '@ngbmodule/material-carousel';
import { CarouselSlide } from 'src/app/model/carousel-slide';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @ViewChild('matCarousel') private _slider!: MatCarouselComponent;
  private readonly COMMON_CAPTION = 'Feel the Power of';
  private _slides: CarouselSlide[] = [
    {
      imageUrl: 'assets/images/slides/tech_guy.jpg',
      caption: `${this.COMMON_CAPTION} Typography`,
      captionColorClass: 'text--light',
      buttonLabel: 'Typography',
      buttonIcon: 'text_fields',
      buttonColorClass: 'red'
    },
    {
      imageUrl: 'assets/images/slides/sea.jpg',
      caption: `${this.COMMON_CAPTION} RWD`,
      captionColorClass: 'text--dark',
      buttonLabel: 'Responsive Web Design',
      buttonIcon: 'auto_fix_high',
      buttonColorClass: 'lagoon'
    },
    {
      imageUrl: 'assets/images/slides/forest.jpg',
      caption: `${this.COMMON_CAPTION} UX Design`,
      captionColorClass: 'dark-text',
      buttonLabel: 'UX Design',
      buttonIcon: 'volunteer_activism',
      buttonColorClass: 'green'
    },
  ];
  private _currentSlide = this._slides[0];

  get slides(): CarouselSlide[] {
    return this._slides;
  }

  get currentCaption(): string {
    return this._currentSlide.caption;
  }

  get currentCaptionColorClass(): string {
    return this._currentSlide.captionColorClass;
  }

  constructor() { }


  ngOnInit(): void { }

  public slideTo(index: number): void {
    this._slider.slideTo(index);
    this._currentSlide = this.slides[index];
  }

}
