import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCarouselComponent } from '@ngbmodule/material-carousel';
import { CarouselSlide } from 'src/app/model/carousel-slide';
import { SliderInfoDialogComponent } from '../slider-info-dialog/slider-info-dialog.component';

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
  private readonly SLIDE_DIALOG_INTERVAL = 4;
  private _slideChanges = 0;
  private _lastSlideTime?: number;

  get slides(): CarouselSlide[] {
    return this._slides;
  }

  get currentCaption(): string {
    return this._currentSlide.caption;
  }

  get currentCaptionColorClass(): string {
    return this._currentSlide.captionColorClass;
  }

  get currentSlideIndex(): number {
    return this._slider ? this._slider.currentIndex : 0;
  }

  constructor(private _dialogService: MatDialog) {
  }

  ngOnInit(): void { }

  public onSlideChange(index: number): void {
    this._slideChanges++;
    this._currentSlide = this._slides[index];

    if (this._slideChanges % this.SLIDE_DIALOG_INTERVAL === 0) {
      this.openSlideDialog();
      this._slideChanges = 0;
    }
  }

  private openSlideDialog(): void {
    const now = Date.now();
    const timeFromLastSlide =
      !!this._lastSlideTime ? ((now - this._lastSlideTime) / 1000) : 0;
    this._lastSlideTime = now;

    this._dialogService.open(SliderInfoDialogComponent, {
      data: timeFromLastSlide
    })
      .afterClosed()
      .subscribe();
  }

  public slideTo(index: number): void {
    this._slider.slideTo(index);
  }

  public isActive(index: number): boolean {
    console.log(index);
    return this.currentSlideIndex === index;
  }
}
