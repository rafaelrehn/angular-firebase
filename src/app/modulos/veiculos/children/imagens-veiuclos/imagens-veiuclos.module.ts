import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagensVeiuclosComponent } from './imagens-veiuclos.component';
import { FileUploadModule } from 'src/app/shared/atomic-design/organisms/file-upload/file-upload.module';



@NgModule({
  declarations: [ImagensVeiuclosComponent],
  imports: [
    CommonModule,
    FileUploadModule
  ],
  
})
export class ImagensVeiuclosModule { }
