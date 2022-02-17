import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from './home-content.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [HomeContentComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [HomeContentComponent]
})
export class HomeContentModule { }
