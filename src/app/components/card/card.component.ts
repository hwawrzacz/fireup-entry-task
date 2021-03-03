import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  private _card!: Card;

  @Input('card')
  set card(value: Card) {
    this._card = value
  }
  get card(): Card {
    return this._card;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
