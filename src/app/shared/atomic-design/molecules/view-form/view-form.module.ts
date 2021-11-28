import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFormComponent } from './view-form.component';
import { ViewInputModule } from '../../atoms/view-input/view-input.module';



@NgModule({
  declarations: [ViewFormComponent],
  imports: [
    CommonModule,
    ViewInputModule
  ],
  exports:[
    ViewFormComponent
  ]
})
export class ViewFormModule { }
