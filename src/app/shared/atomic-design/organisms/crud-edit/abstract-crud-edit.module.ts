import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractCrudEditComponent } from './abstract-crud-edit.component';
import { FormModule } from '../../molecules/form/form.module';
import { BtnBarModule } from '../../molecules/btn-bar/btn-bar.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AbstractCrudEditComponent],
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule,
    BtnBarModule
  ],
  exports: [AbstractCrudEditComponent]
})
export class AbstractCrudEditModule { }
