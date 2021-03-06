import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modulos/admin/auth/auth/auth.component';
import { EmailComponent } from './modulos/admin/auth/email/email.component';
import { LoginComponent } from './modulos/admin/auth/login/login.component';
import { SignupComponent } from './modulos/admin/auth/signup/signup.component';
import { DashboardComponent } from './modulos/admin/dashboard/dashboard.component';
import { ProfileComponent } from './modulos/admin/profile/profile.component';
import { ImagensVeiuclosComponent } from './modulos/admin/veiculos/children/imagens-veiuclos/imagens-veiuclos.component';
import { VeiculosEditComponent } from './modulos/admin/veiculos/edit/veiculos-edit.component';
import { VeiculosListComponent } from './modulos/admin/veiculos/list/veiculos-list.component';
import { ViewDetailsComponent } from './modulos/admin/veiculos/view/view-details/view-details.component';
import { VeiculosViewComponent } from './modulos/admin/veiculos/view/veiculos-view.component';
import { UtilitariosListComponent } from './modulos/admin/utilitarios/list/utilitarios-list.component';
import { UtilitariosEditComponent } from './modulos/admin/utilitarios/edit/utilitarios-edit.component';
import { UtilitariosViewComponent } from './modulos/admin/utilitarios/view/utilitarios-view.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeDefaultComponent } from './modulos/default/home-default/home-default.component';
import { HomeClientComponent } from './modulos/client/home-client/home-client.component';
import { HomeComponent } from './modulos/admin/home/home.component';

const ROUTES: Routes = [
  {
    path: 'admin',
    component: HomeComponent,
    canActivate: [AuthGuard],
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
          { path: '',   redirectTo: 'view', pathMatch: 'prefix' },
        ]
      },
      { path: 'profile', component: ProfileComponent },
      {
        path: 'utilitarios',
        component: UtilitariosListComponent,
      },
      { path: 'utilitarios/create', component: UtilitariosEditComponent },
      { path: 'utilitarios/edit/:key', component: UtilitariosEditComponent },
      {
        path: 'utilitarios/:key', component: UtilitariosViewComponent,
        children: [
          { path: 'view', component: ViewDetailsComponent },
          { path: 'imagens', component: ImagensVeiuclosComponent },
          { path: '',   redirectTo: 'view', pathMatch: 'prefix' },
        ]
      },
      { path: 'profile', component: ProfileComponent },
    ]
  },
  {
    path: 'client/:slug',
    component: HomeClientComponent,
  },
  { path: 'default',
    component: HomeDefaultComponent
  },
  {
    path: 'auth', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'email-login', component: EmailComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  },

  { path: '', redirectTo: '/default', pathMatch: 'full' },
  // { path: '**', redirectTo: '/auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
