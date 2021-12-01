import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';


@NgModule({
  declarations: [FileUploadComponent, UploadDetailsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FileUploadComponent
  ]
})
export class FileUploadModule { }
