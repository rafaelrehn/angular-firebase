import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosEditComponent } from './modulos/veiculos/edit/veiculos-edit.component';
import { VeiculosListComponent } from './modulos/veiculos/list/veiculos-list.component';

const routes: Routes = [
  { path: 'veiculos', component: VeiculosListComponent },
  { path: 'veiculos/edit', component: VeiculosEditComponent },
  { path: '',   redirectTo: '/veiculos', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: VeiculosListComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
