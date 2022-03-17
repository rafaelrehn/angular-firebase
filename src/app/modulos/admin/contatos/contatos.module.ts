import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomicModules } from 'src/app/shared/atomic-design/atomic.modules';
import { ContatosListComponent } from './list/contatos-list.component';
import { ContatosEditComponent } from './edit/contatos-edit.component';
import { ContatosViewComponent } from './view/contatos-view.component';
import { ContatosViewDetailsComponent } from './view/view-details/contatos-view-details.component';

@NgModule({
  declarations: [ContatosListComponent, ContatosEditComponent, ContatosViewComponent, ContatosViewDetailsComponent],
  imports: [
    CommonModule,
    AtomicModules
  ]
})
export class ContatosModule { }
