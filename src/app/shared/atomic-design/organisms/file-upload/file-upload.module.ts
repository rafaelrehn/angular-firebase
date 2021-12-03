import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';
import { BtnModule } from '../../atoms/btn/btn.module';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [FileUploadComponent, UploadDetailsComponent],
  imports: [
    CommonModule,
    BtnModule,
    MatCheckboxModule
  ],
  exports:[
    FileUploadComponent
  ]
})
export class FileUploadModule { }
