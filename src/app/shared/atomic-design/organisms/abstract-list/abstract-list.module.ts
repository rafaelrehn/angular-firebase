import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractListComponent } from './abstract-list.component';



@NgModule({
  declarations: [AbstractListComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AbstractListComponent
  ]
})
export class AbstractListModule { }
