import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './btn.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [BtnComponent],
  exports: [BtnComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class BtnModule { }
