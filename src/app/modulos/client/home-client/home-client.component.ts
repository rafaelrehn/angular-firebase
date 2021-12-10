import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthUser } from '../../admin/auth/auth.service';
import { Veiculo } from '../../admin/veiculos/veiculo';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.scss']
})
export class HomeClientComponent implements OnInit {

  clientSlug: string
  dbPath = 'clients'

  clientInfo: any

  veiculos: Veiculo[]

  constructor(
    private activatedRoute: ActivatedRoute,
    private db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.clientSlug = this.activatedRoute.snapshot.paramMap.get('slug') as string
    this.checkIfClientIsRegistred(this.clientSlug)
  }

  private checkIfClientIsRegistred(clientSlug: string){
    console.log({clientSlug})

    const query = (ref: DatabaseReference)=> ref.orderByChild('slug').equalTo(clientSlug)
    this.db.list(this.dbPath, query)
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map( (c: any)=> {
          let res = c.payload.val() as any
          res.key = c.payload.key as string;
          return res as any
        });
      })
    ).subscribe((res: any[])=>{
      if(res.length >0){
        this.clientInfo = res[0]
        console.log('encntrou um client???', this.clientInfo)
        if(this.clientInfo){
          this.buscarVeiculos(this.clientInfo)
        }
      }
    })
  }

  buscarVeiculos(client: AuthUser){
    const path = `${client.uid}/veiculos`
    this.db.list(path)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map( (c: any)=> {
            let res = c.payload.val() as any
            res.key = c.payload.key as string;
            return res as Veiculo
          });
        })
      ).subscribe(res=>{
        console.log('lista de veiculos deste cliente', res)
        this.veiculos = res
      })
  }

}
