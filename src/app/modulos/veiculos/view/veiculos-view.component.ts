import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractCrudViewComponent } from 'src/app/shared/atomic-design/organisms/abstract-crud-view/abstract-crud-view.component';
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
export class VeiculosViewComponent extends AbstractCrudViewComponent implements OnInit {

  constructor(
    protected service: AbstractService<Veiculo>,
    protected fieldsService: VeiculosFieldServiceService,
    protected route: Router,
    protected activatedRoute: ActivatedRoute
  ) {
    super(service, fieldsService, route, activatedRoute)
   }

  ngOnInit(): void {
  }

}
