import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';
import { BtnModule } from '../../atoms/btn/btn.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderModule } from '../../atoms/loader/loader.module';


@NgModule({
  declarations: [FileUploadComponent, UploadDetailsComponent],
  imports: [
    CommonModule,
    BtnModule,
    MatCheckboxModule,
    MatIconModule,
    LoaderModule
  ],
  exports:[
    FileUploadComponent
  ]
})
export class FileUploadModule { }
