import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { FileUpload } from './model/file-upload.model';
import { FileUploadService } from './service/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;

  selectedFiles?: FileList;
  currentFileUpload: FileUpload[] = [];
  percentage = 0;

  fileUploads?: any[];

  @Input() entityKey: string

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.getListFiles()
    }, 500)
  }

  getListFiles(){
    this.uploadService.getFiles(this.entityKey).snapshotChanges().pipe(
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
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      const fileListLength = this.selectedFiles.length

      for (let index = 0; index < fileListLength; index++) {
        // const element = this.selectedFiles.item(index);
        if(this.selectedFiles){
          const file: File | null = this.selectedFiles.item(index);

          if (file) {
            const fileUpload = new FileUpload(file)
            fileUpload.entityKey = this.entityKey
            this.currentFileUpload.push(fileUpload)
            this.uploadService.pushFileToStorage(fileUpload).subscribe(
              percentage => {
                fileUpload.percentage = Math.round(percentage ? percentage : 0);
                if(percentage == 100){
                  const i = this.currentFileUpload.map(i=>i.file.name).indexOf(fileUpload.file.name)
                  if(i>-1){
                    this.currentFileUpload.splice(i, 1)
                    if(this.currentFileUpload.length == 0){
                      this.resetInput()
                    }
                  }
                }

              },
              error => {
                this.resetInput()
                this.selectedFiles = undefined;
                this.currentFileUpload = []
                console.log(error);
              }
            );
          }
        }
      }
      this.selectedFiles = undefined;
      // this.currentFileUpload = []

    }
  }

  resetInput() {
    this.inputFile.nativeElement.value = "";
  }
}
