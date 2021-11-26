import { Component, OnInit } from '@angular/core';
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

  veiculo: Veiculo;
  key: string = '';

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
