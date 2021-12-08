import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputContainerComponent } from './input-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCheckboxModule } from '../input-checkbox/input-checkbox.module';
import { InputRadioModule } from '../input-radio/input-radio.module';
import { InputMasterModule } from '../input-master/input-master.module';
import { InputModule } from '../input/input.module';
import { InputSelectModule } from '../input-select/input-select.module';



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
  ],
  exports:[
    InputContainerComponent
  ]
})
export class InputContainerModule { }
