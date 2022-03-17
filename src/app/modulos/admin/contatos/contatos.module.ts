import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomicModules } from 'src/app/shared/atomic-design/atomic.modules';
import { ViewDetailsComponent } from './view/view-details/view-details.component';
import { ContatosListComponent } from './list/contatos-list.component';
import { ContatosEditComponent } from './edit/contatos-edit.component';
import { ContatosViewComponent } from './view/contatos-view.component';


@NgModule({
  declarations: [ContatosListComponent, ContatosEditComponent, ContatosViewComponent, ViewDetailsComponent],
  imports: [
    CommonModule,
    AtomicModules
  ]
})
export class ContatosModule { }
