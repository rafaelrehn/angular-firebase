import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewInputComponent } from './view-input.component';



@NgModule({
  declarations: [ViewInputComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ViewInputComponent
  ]
})
export class ViewInputModule { }
