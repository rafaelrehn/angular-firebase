import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewInputComponent } from './view-input.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ViewInputComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    ViewInputComponent
  ]
})
export class ViewInputModule { }
