import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnBarComponent } from './btn-bar.component';
import { BtnModule } from '../../atoms/btn/btn.module';



@NgModule({
  declarations: [BtnBarComponent],
  exports: [BtnBarComponent],
  imports: [
    CommonModule,
    BtnModule
  ]
})
export class BtnBarModule { }
