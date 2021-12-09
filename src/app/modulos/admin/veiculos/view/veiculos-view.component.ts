import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { IBtnInterface } from 'src/app/shared/atomic-design/atoms/btn/btn.interface';
import { ISideMenuItens } from 'src/app/shared/atomic-design/atoms/side-menu/side-menu.component';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';
import { AbstractViewClass } from 'src/app/shared/atomic-design/organisms/abstract-view/abstract-view.class';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { VeiculosFieldServiceService } from '../services/veiculos-field-service.service';
import { Veiculo } from '../veiculo';

@Component({
  selector: 'app-veiculos-view',
  templateUrl: './veiculos-view.component.html',
  styleUrls: ['./veiculos-view.component.scss'],
  providers: [ AbstractService,
    { provide: 'entityName', useValue: 'veiculos' },
    { provide: 'fieldsService', useClass: VeiculosFieldServiceService }
  ]
})
export class VeiculosViewComponent extends AbstractViewClass<Veiculo> implements OnInit {

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
    protected service: AbstractService<Veiculo>,
    protected fieldsService: VeiculosFieldServiceService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute
  ) {
    super(service, fieldsService, router, activatedRoute)
   }

  ngOnInit(): void {
  }

  buildBreadCrumb(){
    return [
      new BreadCrumbBuilder().build('admin', '/home').get(),
      new BreadCrumbBuilder().build('Veiculos', '/home/veiculos').get(),
      new BreadCrumbBuilder().build(
        `${this.model.nome} - ${this.model.anoFabricacao} / ${this.model.anoModelo} - ${this.model.valor}`,
         '/home/veiculos/').active().get(),
    ]
  }

  afterContentLoaded(){
    this.headerInfo = {
      t1: 'Veiculo',
      t2: this.model.nome,
      editBtn: {active: true},
      backBtn: {active: true, levels: 2}
    }
  }

}
