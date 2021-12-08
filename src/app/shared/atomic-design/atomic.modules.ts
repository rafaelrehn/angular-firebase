import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BtnModule } from './atoms/btn/btn.module';
import { InputModule } from './atoms/input/input.module';
import { LoaderModule } from './atoms/loader/loader.module';
import { BtnBarModule } from './molecules/btn-bar/btn-bar.module';
import { FormModule } from './molecules/form/form.module';
import { HeaderActionsModule } from './molecules/list-header/header-actions.module';
import { TableModule } from './molecules/table/table.module';
import { ViewFormModule } from './molecules/view-form/view-form.module';
import { ViewChildModule } from './organisms/view-child/view-child.module';
// import { AbstractCrudEditModule } from './organisms/crud-edit/abstract-crud-edit.module';

const modules: any = [
  // AbstractCrudEditModule
  FormsModule,
  ReactiveFormsModule,
  BtnModule,
  TableModule,
  MatIconModule,
  MatButtonModule,
  AppRoutingModule,
  HeaderActionsModule,
  ViewFormModule,
  ViewChildModule,
  FormModule,
  BtnBarModule,
  LoaderModule
]

@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules
  ]
})
export class AtomicModules { }
