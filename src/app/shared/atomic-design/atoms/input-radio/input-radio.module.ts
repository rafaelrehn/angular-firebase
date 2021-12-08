import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRadioComponent } from './input-radio.component';

import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputErrorContainerModule } from '../input-error-container/input-error-container.module';

@NgModule({
  declarations: [InputRadioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    InputErrorContainerModule

  ],
  exports: [
    InputRadioComponent
  ]
})
export class InputRadioModule { }
