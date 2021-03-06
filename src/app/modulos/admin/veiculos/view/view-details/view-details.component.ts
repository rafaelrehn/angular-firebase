import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { AbstractViewClass } from 'src/app/shared/atomic-design/organisms/abstract-view/abstract-view.class';
import { FileUpload } from 'src/app/shared/atomic-design/organisms/file-upload/model/file-upload.model';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { VeiculosFieldServiceService } from '../../services/veiculos-field-service.service';
import { Veiculo } from '../../veiculo';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
  providers: [ AbstractService,
    { provide: 'entityName', useValue: 'veiculos' },
    { provide: 'fieldsService', useClass: VeiculosFieldServiceService }
  ]
})
export class ViewDetailsComponent extends AbstractViewClass<Veiculo> {

  constructor(
    protected service: AbstractService<Veiculo>,
    protected fieldsService: VeiculosFieldServiceService,
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
