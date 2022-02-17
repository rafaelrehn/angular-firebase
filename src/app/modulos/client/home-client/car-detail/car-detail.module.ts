import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarDetailComponent } from './car-detail.component';



@NgModule({
  declarations: [CarDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [CarDetailComponent]
})
export class CarDetailModule { }
