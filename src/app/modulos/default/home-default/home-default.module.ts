import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDefaultComponent } from './home-default.component';
import { LogoModule } from 'src/app/shared/atomic-design/atoms/logo/logo.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeDefaultComponent],
  imports: [
    CommonModule,
    LogoModule,
    RouterModule
  ],
  exports: [
    HomeDefaultComponent
  ]
})
export class HomeDefaultModule { }
