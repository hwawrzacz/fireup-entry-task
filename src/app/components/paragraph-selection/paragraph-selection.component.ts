import { Component, OnInit } from '@angular/core';
import { Paragraph } from 'src/app/model/paragraph';

@Component({
  selector: 'app-paragraph-selection',
  templateUrl: './paragraph-selection.component.html',
  styleUrls: ['./paragraph-selection.component.scss']
})
export class ParagraphSelectionComponent implements OnInit {
  private _paragraphs: Paragraph[] = [
    {
      title: 'Paragraph for box 1',
      content: 'Culpa do esse aliquip aliqua do consectetur incididunt. Ex ullamco cillum laborum commodo deserunt dolor minim dolore dolore reprehenderit nisi. Pariatur esse excepteur voluptate deserunt nostrud quis nisi laboris voluptate qui ea.',
      buttonLabel: 'Box 1',
      mobileButtonLabel: '1',
      colorClass: 'lagoon',
    },
    {
      title: 'Paragraph for box 2',
      content: 'Pariatur esse excepteur voluptate deserunt nostrud quis nisi laboris voluptate qui ea. Culpa do esse aliquip aliqua do consectetur incididunt. Ex ullamco cillum laborum commodo deserunt dolor minim dolore dolore reprehenderit nisi.',
      buttonLabel: 'Box 2',
      mobileButtonLabel: '2',
      colorClass: 'red',
    },
    {
      title: 'Paragraph for box 3',
      content: 'Culpa do esse  consectetur voluptate deserunt nostrud quis nisi incididunt. Ex ullamco cillum laborum laboris voluptate qui commodo deserunt dolor minim dolore dolore reprehenderit nisi. Pariatur esse aliquip aliqua do excepteur ea.',
      buttonLabel: 'Box 3',
      mobileButtonLabel: '3',
      colorClass: 'yellow',
    },
    {
      title: 'Paragraph for box 4',
      content: 'Culpa incididunt. Ex deserunt nostrud quis nisi laboris do esse ullamco cillum laborum commodo deserunt dolor minim dolore dolore reprehenderit nisi. Pariatur esse excepteur voluptate aliquip aliqua do consectetur voluptate qui ea.',
      buttonLabel: 'Box 4',
      mobileButtonLabel: '4',
      colorClass: 'green',
    }
  ];
  private _currentParagraph = this._paragraphs[0];

  get paragraphs(): Paragraph[] {
    return this._paragraphs;
  }

  get currentParagraphIndex(): number {
    return !!this._currentParagraph && !!this._paragraphs
      ? this._paragraphs.indexOf(this._currentParagraph)
      : 0;
  }

  get currentParagraph(): Paragraph {
    return this._currentParagraph;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public selectParagraph(index: number): void {
    this._currentParagraph = this._paragraphs[index];
  }

}
