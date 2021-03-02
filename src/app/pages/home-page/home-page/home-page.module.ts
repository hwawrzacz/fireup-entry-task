import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../home-page.component';
import { ParagraphSelectionComponent } from 'src/app/components/paragraph-selection/paragraph-selection.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ParagraphSelectionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [HomePageComponent],
})
export class HomePageModule { }
