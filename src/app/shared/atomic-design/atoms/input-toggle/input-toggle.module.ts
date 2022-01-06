import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputToggleComponent } from './input-toggle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { InputErrorContainerModule } from '../input-error-container/input-error-container.module';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [InputToggleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    InputErrorContainerModule
  ],
  exports: [
    InputToggleComponent
  ]
})
export class InputToggleModule { }
