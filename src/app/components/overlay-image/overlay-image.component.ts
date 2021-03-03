import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { OverlayImage } from 'src/app/model/overlay-image';

@Component({
  selector: 'app-overlay-image',
  templateUrl: './overlay-image.component.html',
  styleUrls: ['./overlay-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayImageComponent implements OnInit {
  private _overlayImage!: OverlayImage;

  @Input('overlayImage')
  set overlayImage(value: OverlayImage) {
    this._overlayImage = value;
  }
  get overlayImage(): OverlayImage {
    return this._overlayImage;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
