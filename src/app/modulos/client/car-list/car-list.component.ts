import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthUser } from '../../admin/auth/auth.service';
import { Veiculo } from '../../admin/veiculos/veiculo';
import { HomeClientService } from '../home-client/home-client.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  veiculos: Veiculo[]

  constructor(
    private homeClientService: HomeClientService,
    private db: AngularFireDatabase,
  ) { }

  async ngOnInit() {
    const clientInfo = await this.homeClientService.checkIfClientIsRegistred()
    if (clientInfo) {
      this.buscarVeiculos(clientInfo)
    }
  }

  buscarVeiculos(client: AuthUser) {
    const path = `${client.uid}/veiculos`
    this.db.list(path)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map((c: any) => {
            let res = c.payload.val() as any
            res.key = c.payload.key as string;
            return res as Veiculo
          });
        })
      ).subscribe(res => {
        console.log('lista de veiculos deste cliente', res)
        this.veiculos = res
      })
  }

  getRouterLink(veiculo: Veiculo){
    return `../detalhes/${veiculo.key}`
  }


}
