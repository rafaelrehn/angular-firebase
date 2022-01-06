import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaComponent } from './input-textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InputErrorContainerModule } from '../input-error-container/input-error-container.module';



@NgModule({
  declarations: [InputTextareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    InputErrorContainerModule
  ],
  exports: [
    InputTextareaComponent
  ]
})
export class InputTextareaModule { }
