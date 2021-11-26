import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCheckboxComponent } from './input-checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [InputCheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  exports: [
    InputCheckboxComponent
  ]
})
export class InputCheckboxModule { }
