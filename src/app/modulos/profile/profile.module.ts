import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { HeaderActionsModule } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.module';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    HeaderActionsModule
  ]
})
export class ProfileModule { }
