import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }
