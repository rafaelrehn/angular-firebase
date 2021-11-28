import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractCrudViewComponent } from './abstract-crud-view.component';
import { ViewFormModule } from '../../molecules/view-form/view-form.module';



@NgModule({
  declarations: [AbstractCrudViewComponent],
  imports: [
    CommonModule,
    ViewFormModule
  ],
  exports:[
    AbstractCrudViewComponent
  ]
})
export class AbstractCrudViewModule { }
