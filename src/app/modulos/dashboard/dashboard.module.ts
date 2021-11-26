import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ListHeaderModule } from 'src/app/shared/atomic-design/molecules/list-header/list-header.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ListHeaderModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
