import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeClientComponent } from './home-client.component';
import { HomeContentModule } from './home-content/home-content.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeClientService } from './home-client.service';



@NgModule({
  declarations: [HomeClientComponent],
  imports: [
    CommonModule,
    HomeContentModule,
    AppRoutingModule
  ],
  providers: [
    HomeClientService
  ]
})
export class HomeClientModule { }
