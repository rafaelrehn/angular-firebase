import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veiculo } from 'src/app/modulos/admin/veiculos/veiculo';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { HomeClientService } from '../home-client.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
  providers: [ AbstractService,
    { provide: 'entityName', useValue: 'veiculos' }
  ]
})
export class CarDetailComponent implements OnInit {

  veiculo: Veiculo

  constructor(
    private activatedRoute: ActivatedRoute,
    // protected service: AbstractService<Veiculo>,
    private homeClientService: HomeClientService,
  ) { }

  ngOnInit(): void {
    const keyVeiculo = this.activatedRoute.snapshot.paramMap.get('key') as string
    this.buscarInfoVeiculo(keyVeiculo)
  }

  buscarInfoVeiculo(key: string){
    this.homeClientService.getOneCar(key).subscribe(res=>{
      this.veiculo = res
    })
  }



}
