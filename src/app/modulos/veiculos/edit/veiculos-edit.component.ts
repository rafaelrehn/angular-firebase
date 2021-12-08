import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { IBtnInterface } from 'src/app/shared/atomic-design/atoms/btn/btn.interface';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';
import { AbstractCrudEditComponent } from 'src/app/shared/atomic-design/organisms/crud-edit/abstract-crud-edit.component';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { LoadingService } from 'src/app/shared/base/loading.service';
import { VeiculosFieldServiceService } from '../services/veiculos-field-service.service';
import { Veiculo } from '../veiculo';

@Component({
  selector: 'app-veiculos-edit',
  templateUrl: './veiculos-edit.component.html',
  styleUrls: ['./veiculos-edit.component.scss'],
  providers: [ AbstractService,
    { provide: 'entityName', useValue: 'veiculos' },
    { provide: 'fieldsService', useClass: VeiculosFieldServiceService }
  ]

})
export class VeiculosEditComponent extends AbstractCrudEditComponent<Veiculo> {

  headerInfo: HeaderListInfo = {
    t1: 'Veiculos',
    t2: 'Editar veículo',
    backBtn: {active: true}
  }

  veiculo: Veiculo;
  key: string = '';

  voltarBtn: IBtnInterface = {
    label: 'Voltar',
    class: 'btn-accent',
    icon: 'note_add'
  }

  constructor(
    protected service: AbstractService<Veiculo>,
    protected fieldsService: VeiculosFieldServiceService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
  ) {
    super(
      service,
      fieldsService,
      router,
      activatedRoute
    )
  }

  buildBreadCrumb(){
    if(this.isEdit){
      this.breadcrumb = [
        new BreadCrumbBuilder().build('Home', '/home').get(),
        new BreadCrumbBuilder().build('Veiculos', '/home/veiculos').get(),
        new BreadCrumbBuilder().build(
          `${this.model.nome} - ${this.model.anoFabricacao} / ${this.model.anoModelo} - ${this.model.valor}`,
           '/home/veiculos/').active().get(),
      ]
    }else{
      this.breadcrumb = [
        new BreadCrumbBuilder().build('Home', '/home').get(),
        new BreadCrumbBuilder().build('Veiculos', '/home/veiculos').get(),
        new BreadCrumbBuilder().build(`Novo registro`, '/home/veiculos/').active().get(),
      ]
    }
  }

  setInitialRules(){
    this.form.get('nome')?.setValidators(Validators.required)
  }

}
