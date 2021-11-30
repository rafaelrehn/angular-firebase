import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modulos/auth/auth/auth.component';
import { EmailComponent } from './modulos/auth/email/email.component';
import { LoginComponent } from './modulos/auth/login/login.component';
import { ProfileComponent } from './modulos/auth/profile/profile.component';
import { SignupComponent } from './modulos/auth/signup/signup.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { HomeComponent } from './modulos/home/home.component';
import { VeiculosEditComponent } from './modulos/veiculos/edit/veiculos-edit.component';
import { VeiculosListComponent } from './modulos/veiculos/list/veiculos-list.component';
import { VeiculosViewComponent } from './modulos/veiculos/view/veiculos-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'auth', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'email-login', component: EmailComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      // { path: '**', redirectTo: 'login' },
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'veiculos',
        component: VeiculosListComponent,
      },
      { path: 'veiculos/edit', component: VeiculosEditComponent },
      { path: 'veiculos/edit/:key', component: VeiculosEditComponent },
      { path: 'veiculos/view/:key', component: VeiculosViewComponent },
      { path: '',   redirectTo: '/home', pathMatch: 'full' },
      // { path: '**', component: HomeComponent },
    ]
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
