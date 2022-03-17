import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/modulos/admin/auth/auth.service';
import { FileUpload } from 'src/app/shared/atomic-design/organisms/file-upload/model/file-upload.model';

@Component({
  selector: 'app-imagens-contatos',
  templateUrl: './imagens-contatos.component.html',
  styleUrls: ['./imagens-contatos.component.scss']
})
export class ImagensContatosComponent implements OnInit {

  entityKey: string;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected db: AngularFireDatabase,
    protected authService: AuthService,
    protected _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.entityKey = this.activatedRoute.parent?.snapshot.paramMap.get('key') as string;
  }

  setImagemPrincipal(file: FileUpload){
    console.log({file})
    this.updateImagemPrincipal(file)
  }

  updateImagemPrincipal(file: FileUpload) {
    const pathUrl = `${this.authService.getUid()}/contatos`
    this.db.list(pathUrl).update(this.entityKey, {imagemPrincipal: file})
    .then(updateEvent=>{
      console.log({evt: updateEvent})
      this._snackBar.open('Imagem principal definida!', 'Fechar', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2500,
      });
    })
      .catch(err => {
        console.error(err)
      })
  }

}
