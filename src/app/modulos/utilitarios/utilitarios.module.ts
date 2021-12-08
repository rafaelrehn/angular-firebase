import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitariosListComponent } from './list/utilitarios-list.component';
import { UtilitariosEditComponent } from './edit/utilitarios-edit.component';
import { AtomicModules } from 'src/app/shared/atomic-design/atomic.modules';
import { UtilitariosViewComponent } from './view/utilitarios-view.component';


@NgModule({
  declarations: [UtilitariosListComponent, UtilitariosEditComponent, UtilitariosViewComponent],
  imports: [
    CommonModule,
    AtomicModules
  ]
})
export class UtilitariosModule { }
