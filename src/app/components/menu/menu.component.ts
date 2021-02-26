import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private _shownOnMobile: boolean;

  constructor() {
    this._shownOnMobile = false;
  }

  get shownOnMobile(): boolean {
    return this._shownOnMobile;
  }

  ngOnInit(): void { }

  public toggleMenu(): void {
    this._shownOnMobile = !this._shownOnMobile;
    console.log(`menu showed on mobile
    : ${this._shownOnMobile}`);
  }

}
