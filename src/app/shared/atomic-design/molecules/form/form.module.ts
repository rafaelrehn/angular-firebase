import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { InputModule } from '../../atoms/input/input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSelectModule } from '../../atoms/input-select/input-select.module';
import { InputCheckboxModule } from '../../atoms/input-checkbox/input-checkbox.module';



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    InputModule,
    InputSelectModule, 
    FormsModule,
    ReactiveFormsModule,
    InputCheckboxModule,
  ],
  exports: [FormComponent]
})
export class FormModule { }
