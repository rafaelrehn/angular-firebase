import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/modulos/admin/auth/auth.service';
import { FileUpload } from '../model/file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  parentPath: string
  parentKey: string;


  get getBasePath(){
    if(this.parentPath){
      return `${this.authService.getUid()}/${this.parentPath}/${this.parentKey}/uploads`
    }else{
      return `${this.authService.getUid()}/uploads`
    }
  }

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage, private authService: AuthService) { }

  init(parentPath?: string, parentKey?: string){
    this.parentPath = parentPath as string
    this.parentKey = parentKey as string
  }

  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.getBasePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUpload): void {
    const _path = `${this.authService.getUid()}/uploads`
    this.db.list(this.getBasePath).push(fileUpload);
  }

  getFiles(entityKey: string): AngularFireList<FileUpload> {
    const query = (ref: any)=>ref.orderByChild('entityKey').equalTo(entityKey)
    return this.db.list(this.getBasePath, query);
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.getBasePath).remove(key);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.getBasePath);
    storageRef.child(name).delete();
  }


}
