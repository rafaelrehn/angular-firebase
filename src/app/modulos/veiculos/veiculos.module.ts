import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosListComponent } from './list/veiculos-list.component';
import { VeiculosEditComponent } from './edit/veiculos-edit.component';
import { FormsModule } from '@angular/forms';
import { AtomicModules } from 'src/app/shared/atomic-design/atomic.modules';
import { BtnModule } from 'src/app/shared/atomic-design/atoms/btn/btn.module';
import { TableModule } from 'src/app/shared/atomic-design/molecules/table/table.module';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ListHeaderModule } from 'src/app/shared/atomic-design/molecules/list-header/list-header.module';
import { VeiculosViewComponent } from './view/veiculos-view.component';
import { ViewFormModule } from 'src/app/shared/atomic-design/molecules/view-form/view-form.module';
import { AbstractCrudViewModule } from 'src/app/shared/atomic-design/organisms/abstract-crud-view/abstract-crud-view.module';
import { AbstractListModule } from 'src/app/shared/atomic-design/organisms/abstract-list/abstract-list.module';


@NgModule({
  declarations: [VeiculosListComponent, VeiculosEditComponent, VeiculosViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    AtomicModules,
    BtnModule,
    TableModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    ListHeaderModule,
    AbstractCrudViewModule,
    AbstractListModule
  ]
})
export class VeiculosModule { }
