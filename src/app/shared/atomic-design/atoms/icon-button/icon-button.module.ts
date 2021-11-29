import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [IconButtonComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    IconButtonComponent
  ]
})
export class IconButtonModule { }
