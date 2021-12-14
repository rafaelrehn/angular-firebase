import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderActionsModule } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.module';
import { ConfiguracoesComponent } from './configuracoes.component';



@NgModule({
  declarations: [ConfiguracoesComponent],
  imports: [
    CommonModule,
    HeaderActionsModule
  ]
})
export class ConfiguracoesModule { }
