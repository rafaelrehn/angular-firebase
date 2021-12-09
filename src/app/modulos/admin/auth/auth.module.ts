import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BtnModule } from 'src/app/shared/atomic-design/atoms/btn/btn.module';
import { AuthComponent } from './auth/auth.component';
import { LogoModule } from 'src/app/shared/atomic-design/atoms/logo/logo.module';



@NgModule({
  declarations: [LoginComponent, EmailComponent, SignupComponent, SignupComponent, AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BtnModule,
    LogoModule
  ]
})
export class AuthModule { }
