import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DashboardModule { }
