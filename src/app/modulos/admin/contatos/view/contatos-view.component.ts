import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { IBtnInterface } from 'src/app/shared/atomic-design/atoms/btn/btn.interface';
import { ISideMenuItens } from 'src/app/shared/atomic-design/atoms/side-menu/side-menu.component';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';
import { AbstractViewClass } from 'src/app/shared/atomic-design/organisms/abstract-view/abstract-view.class';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { Contato } from '../contato';
import { ContatosFieldServiceService } from '../services/contatos-field-service.service';

@Component({
  selector: 'app-contatos-view',
  templateUrl: './contatos-view.component.html',
  styleUrls: ['./contatos-view.component.scss'],
  providers: [ AbstractService,
    { provide: 'entityName', useValue: 'contatos' },
    { provide: 'fieldsService', useClass: ContatosFieldServiceService }
  ]
})
export class ContatosViewComponent extends AbstractViewClass<Contato> implements OnInit {

  sideMenuIntens: ISideMenuItens[] = [
    {
      label: 'Resumo',
      route: 'view'
    },
    {
      label: 'Imagens',
      route: 'imagens'
    }
  ]

  headerInfo: HeaderListInfo;

  voltarBtn: IBtnInterface = {
    label: 'Voltar',
    class: 'btn-accent',
    icon: 'note_add',
    backUrlLevels: 2
  }

  constructor(
    protected service: AbstractService<Contato>,
    protected fieldsService: ContatosFieldServiceService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute
  ) {
    super(service, fieldsService, router, activatedRoute)
   }

  ngOnInit(): void {
  }

  buildBreadCrumb(){
    return [
      new BreadCrumbBuilder().build('Admin', '/admin').get(),
      new BreadCrumbBuilder().build('Contatos', '/admin/contatos').get(),
      new BreadCrumbBuilder().build(
        `${this.model.nome}`,
         '/admin/contatos/').active().get(),
    ]
  }

  afterContentLoaded(){
    this.headerInfo = {
      t1: 'Contato',
      t2: this.model.nome,
      editBtn: {active: true},
      backBtn: {active: true, levels: 2}
    }
  }

}
