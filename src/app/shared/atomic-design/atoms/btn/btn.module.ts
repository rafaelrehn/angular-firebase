import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './btn.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [BtnComponent],
  exports: [BtnComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class BtnModule { }
