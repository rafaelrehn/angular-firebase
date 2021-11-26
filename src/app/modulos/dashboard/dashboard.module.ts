import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
