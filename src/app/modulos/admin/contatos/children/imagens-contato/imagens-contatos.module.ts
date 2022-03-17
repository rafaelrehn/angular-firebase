import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'src/app/shared/atomic-design/organisms/file-upload/file-upload.module';
import { ImagensContatosComponent } from './imagens-contatos.component';



@NgModule({
  declarations: [ImagensContatosComponent],
  imports: [
    CommonModule,
    FileUploadModule
  ],

})
export class ImagensContatosModule { }
