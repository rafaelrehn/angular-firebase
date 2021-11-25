import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosListComponent } from './list/veiculos-list.component';
import { VeiculosEditComponent } from './edit/veiculos-edit.component';
import { FormsModule } from '@angular/forms';
import { AtomicModules } from 'src/app/shared/atomic-design/atomic.modules';
import { BtnModule } from 'src/app/shared/atomic-design/atoms/btn/btn.module';
import { TableModule } from 'src/app/shared/atomic-design/molecules/table/table.module';



@NgModule({
  declarations: [VeiculosListComponent, VeiculosEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    AtomicModules,
    BtnModule,
    TableModule
  ]
})
export class VeiculosModule { }
