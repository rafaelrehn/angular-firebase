import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modulos/auth/auth/auth.component';
import { EmailComponent } from './modulos/auth/email/email.component';
import { LoginComponent } from './modulos/auth/login/login.component';
import { SignupComponent } from './modulos/auth/signup/signup.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { HomeComponent } from './modulos/home/home.component';
import { ProfileComponent } from './modulos/profile/profile.component';
import { ImagensVeiuclosComponent } from './modulos/veiculos/children/imagens-veiuclos/imagens-veiuclos.component';
import { VeiculosEditComponent } from './modulos/veiculos/edit/veiculos-edit.component';
import { VeiculosListComponent } from './modulos/veiculos/list/veiculos-list.component';
import { ViewDetailsComponent } from './modulos/veiculos/view/view-details/view-details.component';
import { VeiculosViewComponent } from './modulos/veiculos/view/veiculos-view.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'auth', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'email-login', component: EmailComponent },
      { path: 'signup', component: SignupComponent },

      { path: '', redirectTo: 'login', pathMatch: 'full' },
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
      { path: 'veiculos/create', component: VeiculosEditComponent },
      { path: 'veiculos/edit/:key', component: VeiculosEditComponent },
      {
        path: 'veiculos/:key', component: VeiculosViewComponent,
        children: [
          { path: 'view', component: ViewDetailsComponent },
          { path: 'imagens', component: ImagensVeiuclosComponent },
        ]
      },
      { path: 'profile', component: ProfileComponent },
      // { path: '',   redirectTo: '/home', pathMatch: 'full' },

    ]
  },
  // { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
