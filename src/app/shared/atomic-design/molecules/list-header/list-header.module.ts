import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeaderComponent } from './list-header.component';
import { BtnModule } from '../../atoms/btn/btn.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BreadcrumbModule } from '../../atoms/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [ListHeaderComponent],
  exports: [
    ListHeaderComponent,
  ],
  imports: [
    CommonModule,
    BtnModule,
    AppRoutingModule,
    BreadcrumbModule
  ]
})
export class ListHeaderModule { }