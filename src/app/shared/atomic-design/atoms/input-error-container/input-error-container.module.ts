import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrorContainerComponent } from './input-error-container.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [InputErrorContainerComponent],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports:[
    InputErrorContainerComponent
  ]
})
export class InputErrorContainerModule { }
