import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosListComponent } from './list/veiculos-list.component';
import { VeiculosEditComponent } from './edit/veiculos-edit.component';
import { AtomicModules } from 'src/app/shared/atomic-design/atomic.modules';
import { VeiculosViewComponent } from './view/veiculos-view.component';
import { ViewDetailsComponent } from './view/view-details/view-details.component';


@NgModule({
  declarations: [VeiculosListComponent, VeiculosEditComponent, VeiculosViewComponent, ViewDetailsComponent],
  imports: [
    CommonModule,
    AtomicModules
  ]
})
export class VeiculosModule { }
