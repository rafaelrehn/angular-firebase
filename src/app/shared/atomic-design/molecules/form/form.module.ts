import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { InputModule } from '../../atoms/input/input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    InputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormComponent]
})
export class FormModule { }
