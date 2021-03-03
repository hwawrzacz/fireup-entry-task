import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SliderInfoDialogComponent } from './components/slider-info-dialog/slider-info-dialog.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomePageModule } from './pages/home-page/home-page.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    SliderInfoDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCarouselModule,
    MatIconModule,
    HomePageModule,
    MatDialogModule,
  ],
  providers: [],
  entryComponents: [SliderInfoDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
