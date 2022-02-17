import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthUser } from 'src/app/modulos/admin/auth/auth.service';
import { Veiculo } from 'src/app/modulos/admin/veiculos/veiculo';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  @Input() clientInfo: AuthUser;
  veiculos: Veiculo[]

  constructor(
    private activatedRoute: ActivatedRoute,
    private db: AngularFireDatabase,
  ) { }

  ngOnInit(): void {
    // this.clientSlug = this.activatedRoute.snapshot.paramMap.get('slug') as string
    if(this.clientInfo){
      this.buscarVeiculos(this.clientInfo)
    }
  }

  ngOnChanges(change: SimpleChanges){
    console.log(change)
    const currentvalue = change.clientInfo?.currentValue
    if(change.clientInfo.currentValue){
      this.buscarVeiculos(currentvalue)
    }
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
