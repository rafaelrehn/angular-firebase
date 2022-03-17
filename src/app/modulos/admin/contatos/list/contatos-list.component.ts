import { Component, Inject, OnInit } from '@angular/core';
import { Contato } from '../contato';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { IBtnInterface } from 'src/app/shared/atomic-design/atoms/btn/btn.interface';
import { AbstractListComponent } from 'src/app/shared/atomic-design/organisms/abstract-list/abstract-list.component';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { Router } from '@angular/router';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';
import { ContatosFieldServiceService } from '../services/contatos-field-service.service';
@Component({
  selector: 'app-contatos-list',
  templateUrl: './contatos-list.component.html',
  styleUrls: ['./contatos-list.component.scss'],
  providers: [
    AbstractService,
    { provide: 'entityName', useValue: 'contatos' },
    { provide: 'fieldsService', useClass: ContatosFieldServiceService }
  ]
})
export class ContatosListComponent extends AbstractListComponent<Contato> {

  headerInfo: HeaderListInfo = {
    t1: 'Contatos',
    t2: 'Lista de contatos',
    addBtn: {active: true}
  }

  adicionarBtn: IBtnInterface = {
    label: 'Novo registro',
    class: 'btn-accent',
    icon: 'note_add',
  }



  constructor(
    public service: AbstractService<Contato>,
    protected fieldsService: ContatosFieldServiceService,
    protected route: Router
  ) {
    super(service,fieldsService,route)

  }

  buildBreadCrumb(){
    return [
      new BreadCrumbBuilder().build('Admin', '/admin').get(),
      new BreadCrumbBuilder().build('Veiculos', '/admin/veiculos').active().get(),
    ]
  }

}
