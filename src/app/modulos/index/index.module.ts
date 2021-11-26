import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { IndexComponent } from './index.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    DashboardModule
  ]
})
export class IndexModule { }
