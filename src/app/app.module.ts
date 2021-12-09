import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from '@angular/fire';
import { VeiculosModule } from './modulos/admin/veiculos/veiculos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modulos/admin/home/home.module';
import { AuthModule } from './modulos/admin/auth/auth.module';
import { ProfileModule } from './modulos/admin/profile/profile.module';
import { UtilitariosModule } from './modulos/admin/utilitarios/utilitarios.module';
import { ImagensVeiuclosModule } from './modulos/admin/veiculos/children/imagens-veiuclos/imagens-veiuclos.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const FirebaseConfig = [
  AngularFireAuthModule,
  AngularFireModule.initializeApp(environment.firebase) // Your config
];

const Modulos = [
  VeiculosModule,
  UtilitariosModule,
  ImagensVeiuclosModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseConfig,
    HomeModule,
    BrowserAnimationsModule,
    AuthModule,
    ProfileModule,
    MatSnackBarModule,
    ...Modulos,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
