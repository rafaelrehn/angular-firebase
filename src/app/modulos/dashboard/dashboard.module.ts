import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeaderActionsModule } from 'src/app/shared/atomic-design/molecules/header-actions/header-actions.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HeaderActionsModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
