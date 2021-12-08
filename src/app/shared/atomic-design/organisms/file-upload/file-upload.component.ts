import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { map } from 'rxjs/operators';
import { FileUpload } from './model/file-upload.model';
import { FileUploadService } from './service/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;
  @ViewChild('checkboxTodos') checkboxTodos: MatCheckbox;

  loading = true;


  selectedFiles?: FileList;
  currentFileUpload: FileUpload[] = [];
  percentage = 0;

  fileUploads: FileUpload[] = [];

  @Input() entityKey: string
  @Input() parentPath: string
  @Input() customActionBtnLabel: string

  @Output() customActionEvent = new EventEmitter<FileUpload>()

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.getListFiles()
  }

  customActionEmit(){
    const fileUpload = this.fileUploads.filter(f=>f.selected)[0]
    this.customActionEvent.emit(fileUpload)
  }

  getListFiles(){
    this.uploadService.init(this.parentPath, this.entityKey)
    this.uploadService.getFiles(this.entityKey).snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map((c: any) => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.loading = false
      this.fileUploads = fileUploads as FileUpload[];
      this.limparSelecao()
    });
  }

  checkRemoverIsDisabled(): boolean {
     return this.fileUploads.map(m=>m.selected).filter(f=>f).length == 0
  }

  removerArquivosSelecionados(){
    this.fileUploads.forEach(el=>{
      if(el.selected){
        this.deleteFileUpload(el)
      }
    })
  }

  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }

  isOneSelected(): boolean {
    return this.fileUploads.map(m=>m.selected).filter(f=>f).length == 1
  }


  limparSelecao(){
    this.fileUploads.forEach(el => {
      el.selected = false
    });
    if(this.checkboxTodos){
      this.checkboxTodos.checked = false
    }
  }

  selecioanarTodos(evt: MatCheckboxChange){
    this.fileUploads.forEach(el => {
      el.selected = evt.checked
    });
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    this.upload()
  }

  clickEvent(event: MouseEvent){
    event.preventDefault()
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

  dropFileHandler(evt: any){
    const fileList = evt.target.files as FileList
  }

  resetInput() {
    this.inputFile.nativeElement.value = "";
  }
}
