import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { ParagraphSelectionComponent } from 'src/app/components/paragraph-selection/paragraph-selection.component';
import { CardsSectionComponent } from 'src/app/components/cards-section/cards-section.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { OverlayImageComponent } from 'src/app/components/overlay-image/overlay-image.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomePageComponent,
    ParagraphSelectionComponent,
    CardsSectionComponent,
    CardComponent,
    OverlayImageComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule { }
