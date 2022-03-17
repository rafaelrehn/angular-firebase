import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { IBtnInterface } from 'src/app/shared/atomic-design/atoms/btn/btn.interface';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';
import { AbstractCrudEditComponent } from 'src/app/shared/atomic-design/organisms/crud-edit/abstract-crud-edit.component';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { LoadingService } from 'src/app/shared/base/loading.service';
import { ContatosFieldServiceService } from '../services/contatos-field-service.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-contatos-edit',
  templateUrl: './contatos-edit.component.html',
  styleUrls: ['./contatos-edit.component.scss'],
  providers: [ AbstractService,
    { provide: 'entityName', useValue: 'contatos' },
    { provide: 'fieldsService', useClass: ContatosFieldServiceService }
  ]
})
export class ContatosEditComponent extends AbstractCrudEditComponent<Contato> {

  headerInfo: HeaderListInfo = {
    t1: 'Contatos',
    t2: 'Editar contato',
    backBtn: {active: true}
  }

  veiculo: Contato;
  key: string = '';

  voltarBtn: IBtnInterface = {
    label: 'Voltar',
    class: 'btn-accent',
    icon: 'note_add'
  }

  constructor(
    protected service: AbstractService<Contato>,
    protected fieldsService: ContatosFieldServiceService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected _snackBar: MatSnackBar
  ) {
    super(
      service,
      fieldsService,
      router,
      activatedRoute,
      _snackBar
    )
  }

  buildBreadCrumb(){
    // if(this.isEdit){
    //   return [
    //     new BreadCrumbBuilder().build('Admin', '/admin').get(),
    //     new BreadCrumbBuilder().build('Veiculos', '/admin/veiculos').get(),
    //     new BreadCrumbBuilder().build(
    //       `${this.model.nome} - ${this.model.anoFabricacao} / ${this.model.anoModelo} - ${this.model.valor}`,
    //        '/admin/veiculos/').active().get(),
    //   ]
    // }else{
    //   return [
    //     new BreadCrumbBuilder().build('Admin', '/admin').get(),
    //     new BreadCrumbBuilder().build('Veiculos', '/admin/veiculos').get(),
    //     new BreadCrumbBuilder().build(`Novo registro`, '/admin/veiculos/').active().get(),
    //   ]
    // }
    return []
  }

  setInitialRules(){
    // this.form.get('nome')?.setValidators([Validators.required])
  }

}
