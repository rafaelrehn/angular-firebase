import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { HeaderActionsModule } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.module';
import { FormModule } from 'src/app/shared/atomic-design/molecules/form/form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BtnBarModule } from 'src/app/shared/atomic-design/molecules/btn-bar/btn-bar.module';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    HeaderActionsModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    BtnBarModule
  ]
})
export class ProfileModule { }
