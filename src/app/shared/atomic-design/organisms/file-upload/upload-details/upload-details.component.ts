import { Component, Input, OnInit } from '@angular/core';
import { FileUpload } from '../model/file-upload.model';
import { FileUploadService } from '../service/file-upload.service';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.scss']
})
export class UploadDetailsComponent implements OnInit {

  @Input() fileUpload!: FileUpload;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
  }



  getImageSample(fileUpload: FileUpload){
    let x = 'url(' + fileUpload.url + ')'
    // console.log('profile image', x)s
    return x
  }

}
