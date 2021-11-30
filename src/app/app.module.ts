import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from '@angular/fire';
import { VeiculosModule } from './modulos/veiculos/veiculos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modulos/home/home.module';
import { AuthModule } from './modulos/auth/auth.module';
import { ProfileModule } from './modulos/profile/profile.module';

const FirebaseConfig = [
  AngularFireAuthModule,
  AngularFireModule.initializeApp(environment.firebase) // Your config
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseConfig,
    VeiculosModule,
    HomeModule,
    BrowserAnimationsModule,
    AuthModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
