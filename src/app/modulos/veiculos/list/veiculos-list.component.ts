import { Component, Inject, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { VeiculosFieldServiceService } from '../services/veiculos-field-service.service';
import { IBtnInterface } from 'src/app/shared/atomic-design/atoms/btn/btn.interface';
import { AbstractListComponent } from 'src/app/shared/atomic-design/organisms/abstract-list/abstract-list.component';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/list-header.component';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { IBreadcrumb } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb.interface';
@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list.component.html',
  styleUrls: ['./veiculos-list.component.scss'],
  providers: [
    AbstractService,
    { provide: 'entityName', useValue: 'veiculos' },
    { provide: 'fieldsService', useClass: VeiculosFieldServiceService }
  ]
})
export class VeiculosListComponent extends AbstractListComponent<Veiculo> {

  headerInfo: HeaderListInfo = {
    h2: 'Veiculos',
    h4: 'Cadastro de veiculos',
    buttons: {
      add: true
    }
  }

  adicionarBtn: IBtnInterface = {
    label: 'Novo registro',
    class: 'btn-accent',
    icon: 'note_add'
  }

  breadcrumb: IBreadcrumb[]

  constructor(
    public service: AbstractService<Veiculo>,
    protected fieldsService: VeiculosFieldServiceService
  ) {
    super(service,fieldsService)

    this.buildBreadCrumb()
  }

  buildBreadCrumb(){
    this.breadcrumb = [
      new BreadCrumbBuilder().build('Home', '/home').get(),
      new BreadCrumbBuilder().build('Veiculos', '/home/veiculos').active().get(),
    ]
  }

}
