import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeClientComponent } from './home-client.component';
import { HomeContentModule } from '../home-content/home-content.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeClientService } from './home-client.service';
import { CarDetailModule } from '../car-detail/car-detail.module';
import { CarListModule } from '../car-list/car-list.module';
import { ContactPageModule } from '../contact-page/contact-page.module';
import { AboutPageModule } from '../about-page/about-page.module';




@NgModule({
  declarations: [HomeClientComponent],
  imports: [
    CommonModule,
    HomeContentModule,
    AppRoutingModule,
    CarDetailModule,
    CarListModule,
    ContactPageModule,
    AboutPageModule
  ],
  providers: [
    HomeClientService
  ]
})
export class HomeClientModule { }
