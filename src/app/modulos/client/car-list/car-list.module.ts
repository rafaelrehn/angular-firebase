import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [CarListComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CarListComponent
  ]
})
export class CarListModule { }
