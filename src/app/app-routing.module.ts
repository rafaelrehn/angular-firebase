import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { HomeComponent } from './modulos/home/home.component';
import { VeiculosEditComponent } from './modulos/veiculos/edit/veiculos-edit.component';
import { VeiculosListComponent } from './modulos/veiculos/list/veiculos-list.component';
import { VeiculosViewComponent } from './modulos/veiculos/view/veiculos-view.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent ,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'veiculos',
        component: VeiculosListComponent ,
      },
      { path: 'veiculos/edit', component: VeiculosEditComponent },
      { path: 'veiculos/edit/:key', component: VeiculosEditComponent },
      { path: 'veiculos/view/:key', component: VeiculosViewComponent }
    ]
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
