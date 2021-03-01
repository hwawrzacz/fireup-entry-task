import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SliderComponent } from './components/slider/slider.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { SliderInfoDialogComponent } from './components/slider-info-dialog/slider-info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    SliderInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCarouselModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [],
  entryComponents: [SliderInfoDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
