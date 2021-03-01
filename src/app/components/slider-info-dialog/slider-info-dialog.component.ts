import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-slider-info-dialog',
  templateUrl: './slider-info-dialog.component.html',
  styleUrls: ['./slider-info-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderInfoDialogComponent implements OnInit {
  get timeFromLastSlide(): number {
    return this._timeFromLastSlide;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private _timeFromLastSlide: number,
    private _dialogRef: MatDialogRef<SliderInfoDialogComponent>
  ) { }

  ngOnInit(): void { }

  public closeDialog(): void {
    this._dialogRef.close();
  }
}
