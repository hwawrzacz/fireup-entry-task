import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  private readonly _title = 'Title'
  private readonly _items: string[] = [
    'Nisi eu esse proident minim cillum. Aliqua ut pariatur do incididunt elit aute esse. Mollit est id dolore officia eu duis veniam.',
    'Nisi eu esse proident minim cillum. Aliqua ut pariatur do incididunt elit aute esse. Mollit est id dolore officia eu duis veniam.',
    'Nisi eu esse proident minim cillum. Aliqua ut pariatur do incididunt elit aute esse. Mollit est id dolore officia eu duis veniam.',
    'Nisi eu esse proident minim cillum. Aliqua ut pariatur do incididunt elit aute esse. Mollit est id dolore officia eu duis veniam.',
    'Nisi eu esse proident minim cillum. Aliqua ut pariatur do incididunt elit aute esse. Mollit est id dolore officia eu duis veniam.',
  ]

  get title(): string {
    return this._title;
  }

  get items(): string[] {
    return this._items;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
