import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthUser } from 'src/app/modulos/admin/auth/auth.service';
import { Veiculo } from 'src/app/modulos/admin/veiculos/veiculo';
import { HomeClientService } from '../home-client.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  veiculos: Veiculo[]

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeClientService: HomeClientService,
    private db: AngularFireDatabase,
  ) { }

  async ngOnInit() {
    // const clientSlug = this.activatedRoute.snapshot.paramMap.get('slug') as string
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
