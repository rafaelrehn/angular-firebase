import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { IBtnInterface } from 'src/app/shared/atomic-design/atoms/btn/btn.interface';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';
import { AbstractCrudEditComponent } from 'src/app/shared/atomic-design/organisms/crud-edit/abstract-crud-edit.component';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { LoadingService } from 'src/app/shared/base/loading.service';
import { UtilitariosFieldServiceService } from '../services/utilitarios-field-service.service';
import { Utilitario } from '../utilitario';

@Component({
  selector: 'app-utilitarios-edit',
  templateUrl: './utilitarios-edit.component.html',
  styleUrls: ['./utilitarios-edit.component.scss'],
  providers: [ AbstractService,
    { provide: 'entityName', useValue: 'utilitarios' },
    { provide: 'fieldsService', useClass: UtilitariosFieldServiceService }
  ]

})
export class UtilitariosEditComponent extends AbstractCrudEditComponent<Utilitario> {

  headerInfo: HeaderListInfo = {
    t1: 'Utilitarios',
    t2: 'Editar utilitário',
    backBtn: {active: true}
  }

  utilitario: Utilitario;
  key: string = '';

  voltarBtn: IBtnInterface = {
    label: 'Voltar',
    class: 'btn-accent',
    icon: 'note_add'
  }

  constructor(
    protected service: AbstractService<Utilitario>,
    protected fieldsService: UtilitariosFieldServiceService,
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
    if(this.isEdit){
      return [
        new BreadCrumbBuilder().build('Home', '/home').get(),
        new BreadCrumbBuilder().build('Utilitarios', '/home/utilitarios').get(),
        new BreadCrumbBuilder().build(
          `${this.model.nome}`,
           '/home/utilitarios/').active().get(),
      ]
    }else{
      return [
        new BreadCrumbBuilder().build('Home', '/home').get(),
        new BreadCrumbBuilder().build('Utilitarios', '/home/utilitarios').get(),
        new BreadCrumbBuilder().build(`Novo registro`, '/home/utilitarios/').active().get(),
      ]
    }
  }

  setInitialRules(){
    // this.form.get()
  }

}
