import { Component, Inject, OnInit } from '@angular/core';
import { Utilitario } from '../utilitario';
import { Observable } from 'rxjs';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { UtilitariosFieldServiceService } from '../services/utilitarios-field-service.service';
import { IBtnInterface } from 'src/app/shared/atomic-design/atoms/btn/btn.interface';
import { AbstractListComponent } from 'src/app/shared/atomic-design/organisms/abstract-list/abstract-list.component';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { IBreadcrumb } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb.interface';
import { Router } from '@angular/router';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';
@Component({
  selector: 'app-utilitarios-list',
  templateUrl: './utilitarios-list.component.html',
  styleUrls: ['./utilitarios-list.component.scss'],
  providers: [
    AbstractService,
    { provide: 'entityName', useValue: 'utilitarios' },
    { provide: 'fieldsService', useClass: UtilitariosFieldServiceService }
  ]
})
export class UtilitariosListComponent extends AbstractListComponent<Utilitario> {

  headerInfo: HeaderListInfo = {
    t1: 'Utilitarios',
    t2: 'Lista de utilitarios',
    addBtn: {active: true}
  }

  adicionarBtn: IBtnInterface = {
    label: 'Novo registro',
    class: 'btn-accent',
    icon: 'note_add',
  }

  breadcrumb: IBreadcrumb[]

  constructor(
    public service: AbstractService<Utilitario>,
    protected fieldsService: UtilitariosFieldServiceService,
    protected route: Router
  ) {
    super(service,fieldsService,route)

    this.buildBreadCrumb()
  }

  buildBreadCrumb(){
    this.breadcrumb = [
      new BreadCrumbBuilder().build('Home', '/home').get(),
      new BreadCrumbBuilder().build('Utilitarios', '/home/utilitarios').active().get(),
    ]
  }

}
