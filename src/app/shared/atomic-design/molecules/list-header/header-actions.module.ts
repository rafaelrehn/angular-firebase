import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnModule } from '../../atoms/btn/btn.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BreadcrumbModule } from '../../atoms/breadcrumb/breadcrumb.module';
import { MatIconModule } from '@angular/material/icon';
import { IconButtonModule } from '../../atoms/icon-button/icon-button.module';
import { HeaderActionsComponent } from './header-actions.component';

@NgModule({
  declarations: [HeaderActionsComponent],
  exports: [
    HeaderActionsComponent,
  ],
  imports: [
    CommonModule,
    BtnModule,
    AppRoutingModule,
    BreadcrumbModule,
    MatIconModule,
    AppRoutingModule,
    IconButtonModule
  ]
})
export class HeaderActionsModule { }
