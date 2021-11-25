import { NgModule } from '@angular/core';
import { InputModule } from './atoms/input/input.module';
import { FormModule } from './molecules/form/form.module';
import { AbstractCrudEditModule } from './organisms/crud-edit/abstract-crud-edit.module';

const modules = [
  AbstractCrudEditModule
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
