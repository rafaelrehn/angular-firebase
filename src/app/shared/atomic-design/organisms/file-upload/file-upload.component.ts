import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FileUpload } from './model/file-upload.model';
import { FileUploadService } from './service/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;

  fileUploads?: any[];

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.getListFiles()
  } 

  getListFiles(){
    this.uploadService.getFiles(6).snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);

              // aqui escrever a regra a key dos arquivos

          },
          error => {
            console.log(error);
          }
        );
      }
    }

  }
}
