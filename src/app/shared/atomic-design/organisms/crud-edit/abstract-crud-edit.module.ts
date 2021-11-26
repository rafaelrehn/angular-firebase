import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractCrudEditComponent } from './abstract-crud-edit.component';
import { FormModule } from '../../molecules/form/form.module';
import { BtnBarModule } from '../../molecules/btn-bar/btn-bar.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [AbstractCrudEditComponent],
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule,
    BtnBarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
  ],
  exports: [AbstractCrudEditComponent]
})
export class AbstractCrudEditModule { }
