import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { IBtnInterface } from 'src/app/shared/atomic-design/atoms/btn/btn.interface';
import { ISideMenuItens } from 'src/app/shared/atomic-design/atoms/side-menu/side-menu.component';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';
import { AbstractViewClass } from 'src/app/shared/atomic-design/organisms/abstract-view/abstract-view.class';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { UtilitariosFieldServiceService } from '../services/utilitarios-field-service.service';
import { Utilitario } from '../utilitario';

@Component({
  selector: 'app-utilitarios-view',
  templateUrl: './utilitarios-view.component.html',
  styleUrls: ['./utilitarios-view.component.scss'],
  providers: [ AbstractService,
    { provide: 'entityName', useValue: 'utilitarios' },
    { provide: 'fieldsService', useClass: UtilitariosFieldServiceService }
  ]
})
export class UtilitariosViewComponent extends AbstractViewClass<Utilitario> implements OnInit {

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
    protected service: AbstractService<Utilitario>,
    protected fieldsService: UtilitariosFieldServiceService,
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
      new BreadCrumbBuilder().build('Utilitarios', '/admin/utilitarios').get(),
      new BreadCrumbBuilder().build(
        `${this.model.nome}`,
         '/admin/utilitarios/').active().get(),
    ]
  }

  afterContentLoaded(){
    this.headerInfo = {
      t1: 'Utilitario',
      t2: this.model.nome,
      editBtn: {active: true},
      backBtn: {active: true, levels: 2}
    }
  }

}
