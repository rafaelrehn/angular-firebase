import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { BtnModule } from '../../atoms/btn/btn.module';
import { InputCheckboxModule } from '../../atoms/input-checkbox/input-checkbox.module';
import { IconButtonModule } from '../../atoms/icon-button/icon-button.module';
import { MatIconModule } from '@angular/material/icon';
import { SearchBarModule } from '../../atoms/search-bar/search-bar.module';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    CdkTableModule,
    BtnModule,
    InputCheckboxModule,
    IconButtonModule,
    MatIconModule,
    SearchBarModule,
    FormsModule,
    FilterPipeModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
