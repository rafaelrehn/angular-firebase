import { Component, OnInit } from '@angular/core';
import { IBtnInterface } from 'src/app/shared/atomic-design/atoms/btn/btn.interface';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/list-header.component';
import { AbstractCrudEditComponent } from 'src/app/shared/atomic-design/organisms/crud-edit/abstract-crud-edit.component';
import { AbstractService } from 'src/app/shared/base/abstract.service';
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
export class VeiculosEditComponent extends AbstractCrudEditComponent implements OnInit {

  headerInfo: HeaderListInfo = {
    h2: 'Veiculos',
    h4: 'Cadastro de veiculos',
    buttons: {
      add: true
    }
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
    protected fieldsService: VeiculosFieldServiceService
  ) {
    super(
      service,
      fieldsService
    )
  }

  ngOnInit(): void {
  }

}
