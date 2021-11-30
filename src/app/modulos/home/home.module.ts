import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DashboardModule } from '../dashboard/dashboard.module';
import { LogoModule } from 'src/app/shared/atomic-design/atoms/logo/logo.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    DashboardModule,
    LogoModule
  ]
})
export class HomeModule { }
