import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { InputModule } from '../../atoms/input/input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSelectModule } from '../../atoms/input-select/input-select.module';
import { InputCheckboxModule } from '../../atoms/input-checkbox/input-checkbox.module';
import { InputRadioModule } from '../../atoms/input-radio/input-radio.module';
import { InputMasterModule } from '../../atoms/input-master/input-master.module';
import { InputContainerModule } from '../../atoms/input-container/input-container.module';



@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputContainerModule
  ],
  exports: [FormComponent]
})
export class FormModule { }
