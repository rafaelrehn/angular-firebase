import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractViewClass } from 'src/app/shared/atomic-design/organisms/abstract-view/abstract-view.class';
import { FileUpload } from 'src/app/shared/atomic-design/organisms/file-upload/model/file-upload.model';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { ContatosFieldServiceService } from '../../services/contatos-field-service.service';
import { Contato } from '../../contato';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
  providers: [ AbstractService,
    { provide: 'entityName', useValue: 'contatos' },
    { provide: 'fieldsService', useClass: ContatosFieldServiceService }
  ]
})
export class ViewDetailsComponent extends AbstractViewClass<Contato> {

  constructor(
    protected service: AbstractService<Contato>,
    protected fieldsService: ContatosFieldServiceService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
  ) {
    super(service, fieldsService, router, activatedRoute)
   }

  ngOnInit(): void {
  }


  setEntityKey(){
    this.entityKey = this.activatedRoute.parent?.snapshot.params['key'];
  }

  getImageSample(fileUpload?: FileUpload){
    let x = 'url(' + fileUpload?.url + ')'
    // console.log('profile image', x)s
    return x
  }

}
