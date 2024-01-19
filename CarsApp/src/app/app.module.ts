import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { SoldCarsComponent } from './sold-cars/sold-cars.component';
import { UserDataComponent } from './user-data/user-data.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarsListComponent,
    SoldCarsComponent,
    UserDataComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
