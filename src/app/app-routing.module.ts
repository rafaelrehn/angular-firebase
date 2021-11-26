import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { IndexComponent } from './modulos/index/index.component';
import { VeiculosEditComponent } from './modulos/veiculos/edit/veiculos-edit.component';
import { VeiculosListComponent } from './modulos/veiculos/list/veiculos-list.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent ,
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'veiculos',
        component: VeiculosListComponent ,
      },
      { path: 'veiculos/edit', component: VeiculosEditComponent }
    ]
  },
  { path: '',   redirectTo: '/index', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: IndexComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
