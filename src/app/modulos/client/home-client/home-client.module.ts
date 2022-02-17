import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeClientComponent } from './home-client.component';
import { HomeContentModule } from './home-content/home-content.module';



@NgModule({
  declarations: [HomeClientComponent],
  imports: [
    CommonModule,
    HomeContentModule
  ]
})
export class HomeClientModule { }
