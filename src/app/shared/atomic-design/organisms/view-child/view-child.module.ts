import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChildComponent } from './view-child.component';
import { ViewFormModule } from '../../molecules/view-form/view-form.module';
import { SideMenuModule } from '../../atoms/side-menu/side-menu.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [ViewChildComponent],
  imports: [
    CommonModule,
    ViewFormModule,
    SideMenuModule,
    AppRoutingModule
  ],
  exports: [
    ViewChildComponent
  ]
})
export class ViewChildModule { }
