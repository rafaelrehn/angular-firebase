import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosListComponent } from './list/veiculos-list.component';
import { VeiculosEditComponent } from './edit/veiculos-edit.component';
import { FormsModule } from '@angular/forms';
import { AtomicModules } from 'src/app/shared/atomic-design/atomic.modules';
import { BtnModule } from 'src/app/shared/atomic-design/atoms/btn/btn.module';
import { TableModule } from 'src/app/shared/atomic-design/molecules/table/table.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { VeiculosViewComponent } from './view/veiculos-view.component';
import { ViewFormModule } from 'src/app/shared/atomic-design/molecules/view-form/view-form.module';
import { ViewChildModule } from 'src/app/shared/atomic-design/organisms/view-child/view-child.module';
import { ViewDetailsComponent } from './view/view-details/view-details.component';
import { HeaderActionsModule } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.module';


@NgModule({
  declarations: [VeiculosListComponent, VeiculosEditComponent, VeiculosViewComponent, ViewDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AtomicModules,
    BtnModule,
    TableModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    HeaderActionsModule,
    ViewFormModule,
    ViewChildModule,
    ViewFormModule
  ]
})
export class VeiculosModule { }
