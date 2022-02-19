import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from './home-content.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CarListModule } from '../car-list/car-list.module';



@NgModule({
  declarations: [HomeContentComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CarListModule
  ],
  exports: [HomeContentComponent]
})
export class HomeContentModule { }
