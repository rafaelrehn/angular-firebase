import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputContainerComponent } from './input-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCheckboxModule } from '../input-checkbox/input-checkbox.module';
import { InputRadioModule } from '../input-radio/input-radio.module';
import { InputMasterModule } from '../input-master/input-master.module';
import { InputModule } from '../input/input.module';
import { InputSelectModule } from '../input-select/input-select.module';
import { MatInputModule } from '@angular/material/input';
import { InputTextareaModule } from '../input-textarea/input-textarea.module';
import { InputToggleModule } from '../input-toggle/input-toggle.module';



@NgModule({
  declarations: [InputContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputCheckboxModule,
    InputRadioModule,
    InputMasterModule,
    InputModule,
    InputSelectModule,
    MatInputModule,
    InputTextareaModule,
    InputToggleModule
  ],
  exports:[
    InputContainerComponent
  ]
})
export class InputContainerModule { }
