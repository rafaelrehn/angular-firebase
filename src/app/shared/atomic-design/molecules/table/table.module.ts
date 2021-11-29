import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { BtnModule } from '../../atoms/btn/btn.module';
import { InputCheckboxModule } from '../../atoms/input-checkbox/input-checkbox.module';
import { IconButtonModule } from '../../atoms/icon-button/icon-button.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    CdkTableModule,
    BtnModule,
    InputCheckboxModule,
    IconButtonModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
