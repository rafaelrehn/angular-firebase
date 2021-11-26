import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRadioComponent } from './input-radio.component';

import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputRadioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  exports: [
    InputRadioComponent
  ]
})
export class InputRadioModule { }
