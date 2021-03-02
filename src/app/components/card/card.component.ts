import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  private _imageUrl: string = '';
  private _imageAltText: string = '';
  private _caption: string = '';
  private _imageStyle: 'circle' | 'polygon' = 'circle';

  @Input('imageUrl')
  set imageUrl(value: string) {
    this._imageUrl = value
  }
  get imageUrl(): string {
    return this._imageUrl;
  }

  @Input('imageAltText')
  set imageAltText(value: string) {
    this._imageAltText = value;
  }
  get imageAltText(): string {
    return this._imageAltText;
  }

  @Input('imageStyle')
  set imageStyle(value: 'circle' | 'polygon') {
    this._imageStyle = value;
  }
  get imageStyle(): 'circle' | 'polygon' {
    return this._imageStyle;
  }

  @Input('caption')
  set caption(value: string) {
    this._caption = value;
  }
  get caption(): string {
    return this._caption;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
