import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SearchBarModule { }
